import styled from '@emotion/styled'
import produce from 'immer'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { getType, patchType, TypeInterface } from '../api/type'
import Header from '../component/Header/Header'
import AddIcon from '@mui/icons-material/Add'
import { Colors } from '../util/Colors'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'
import SaveIcon from '@mui/icons-material/Save'
import LoadingDim from '../component/LoadingDim/LoadingDim'
import { addSnackBar } from '../util/util'

export default function TypesPage() {
  const [types, setTypes] = useState<TypeInterface[]>()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getType().then((res) => {
      setTypes(res.types)
    })
  }, [])

  const addType = () => {
    const changed = produce((draft) => {
      draft?.push({ type: '', background: '' })
      return draft
    }, types)
    setTypes(changed)
  }

  const removeType = (i: number) => {
    const removed = produce((draft) => {
      draft?.splice(i, 1)
      return draft
    }, types)
    setTypes(removed)
  }

  const changeType = (e: ChangeEvent<HTMLInputElement>, i: number) => {
    const changed = produce((draft) => {
      if (draft && draft[i] !== undefined) draft[i].type = e.target.value
      return draft
    }, types)
    setTypes(changed)
  }
  const changeBackground = (e: ChangeEvent<HTMLInputElement>, i: number) => {
    const changed = produce((draft) => {
      if (draft && draft[i] !== undefined) draft[i].background = e.target.value
      return draft
    }, types)
    setTypes(changed)
  }

  return (
    <>
      <Header title='유형변경' backButton />
      <ListTitle>
        <span>유형이름</span>
        <span>배경색</span>
      </ListTitle>
      {React.Children.toArray(
        types?.map(({ type, background }, i) => (
          <ListDiv>
            {`${i}.`}
            <TypeInput value={type} onChange={(e) => changeType(e, i)} />{' '}
            <TypeInput
              value={background}
              onChange={(e) => changeBackground(e, i)}
            />{' '}
            <RemoveIcon fontSize='small' onClick={(e) => removeType(i)} />
          </ListDiv>
        )),
      )}
      <SaveButton
        disabled={loading}
        onClick={() => {
          if (types) {
            setLoading(true)
            patchType(types)
              .then((res) => {
                setLoading(false)
                addSnackBar('저장 완료')
              })
              .catch(() => {
                setLoading(false)
                addSnackBar('저장 실패')
              })
          }
        }}
      >
        <SaveIcon />
      </SaveButton>
      <AddButton onClick={addType}>
        <AddIcon />
      </AddButton>
      <LoadingDim loading={loading} />
    </>
  )
}
const ListTitle = styled.div`
  padding-left: 20px;
  span {
    display: inline-block;
    text-align: center;
    width: 100px;
  }
`
const ListDiv = styled.div`
  padding: 4px;
  display: flex;
  align-items: center;
`
const TypeInput = styled.input`
  width: 100px;
  margin-left: 4px;
`
const AddButton = styled.button`
  position: fixed;
  @media (min-width: 500px) {
    position: absolute;
  }
  z-index: 1;
  bottom: 20px;
  right: 20px;

  padding: 2px;
  width: 40px;
  height: 40px;

  overflow: hidden;
  background: ${Colors.green100};
  border: 2px solid ${Colors.green100};
  border-radius: 100%;
  opacity: 0.8;
  svg {
    color: white;
    width: 100%;
    height: 100%;
  }
`
const RemoveIcon = styled(RemoveCircleOutlineIcon)`
  margin-left: 5px;
  color: red;
`
const SaveButton = styled.button<{ disabled: boolean }>`
  position: fixed;
  z-index: 1;
  bottom: 80px;
  right: 20px;
  @media (min-width: 500px) {
    right: calc(50% - 230px);
  }

  padding: 5px;
  width: 40px;
  height: 40px;

  overflow: hidden;
  background: blue;
  border: 2px solid #eee;
  border-radius: 100%;
  opacity: 0.7;
  svg {
    color: white;
    width: 100%;
    height: 100%;
  }
  ${({ disabled }) => disabled && `background: #555;`}
`