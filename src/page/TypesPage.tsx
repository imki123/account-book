import styled from '@emotion/styled'
import produce from 'immer'
import React, { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { getType, patchType, TypeInterface } from '../api/type'
import Header from '../component/Header/Header'
import AddIcon from '@mui/icons-material/Add'
import { Colors } from '../util/Colors'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'
import SaveIcon from '@mui/icons-material/Save'
import LoadingDim from '../component/LoadingDim/LoadingDim'
import { addSnackBar } from '../util/util'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown'
import { MOBILE_PADDING } from '../App'

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

  const orderUp = useCallback(
    (i: number) => {
      if (types) {
        if (i > 0) {
          const res = produce(types, (draft) => {
            const temp = draft[i - 1]
            draft[i - 1] = draft[i]
            draft[i] = temp
            return draft
          })
          setTypes(res)
        }
      }
    },
    [types],
  )
  const orderDown = useCallback(
    (i: number) => {
      if (types) {
        if (i < types.length - 1) {
          const res = produce(types, (draft) => {
            const temp = draft[i + 1]
            draft[i + 1] = draft[i]
            draft[i] = temp
            return draft
          })
          setTypes(res)
        }
      }
    },
    [types],
  )

  return (
    <StyledTypesPage>
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
            <ColorSpan background={background} />
            <ArrowCircleUpIcon onClick={() => orderUp(i)} />
            <ArrowCircleDownIcon onClick={() => orderDown(i)} />
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
    </StyledTypesPage>
  )
}

const StyledTypesPage = styled.div`
  ${MOBILE_PADDING}
`
const ListTitle = styled.div`
  padding-left: 20px;
  span {
    display: inline-block;
    text-align: center;
    width: 100px;
  }
`
const ColorSpan = styled.span<{ background?: string }>`
  display: inline-block;
  width: 40px;
  height: 20px;
  margin-left: 4px;
  margin-right: 5px;
  background: ${({ background }) =>
    background?.startsWith('#') ? background : '#' + background};
`
const ListDiv = styled.div`
  padding: 4px;
  display: flex;
  align-items: center;
  svg:not(:last-of-type) {
    color: ${Colors.green100};
  }
`
const TypeInput = styled.input`
  width: 100px;
  margin-left: 4px;
`
const AddButton = styled.button`
  position: fixed;
  @media (min-width: 1000px) {
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
  margin-left: 15px;
  color: red;
`
const SaveButton = styled.button<{ disabled: boolean }>`
  position: fixed;
  z-index: 1;
  bottom: 80px;
  right: 20px;
  @media (min-width: 1000px) {
    right: calc(50% - (1000px / 2) + 20px);
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
