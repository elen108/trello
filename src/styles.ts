import styled from 'styled-components';
import { AiFillDelete } from 'react-icons/ai';

export const AppContainer = styled.div`
background-color: #185673;
display: flex;
align-items: flex-start;
flex-direction: row;
height: 100%;
padding: 20px;
width: 100%;
`;

export const ColumnTitle = styled.div`
padding: 6px 16px 12px;
font-weight: bold;
`;

export const CardContainer = styled.div`
display: flex;
justify-content: space-between;
background-color: #ffffff;
cursor: pointer;
margin-bottom: 0.5rem;
padding: 0.5rem;
max-width: 300px;
border-radius: 5px;
box-shadow: #c6c6c8 0 1px 0 0;
`;

// Add new tasks and list Button

type AddItemButtonProps = {
    dark? : boolean
}

export const AddItemButton = styled.button<AddItemButtonProps>`
background-color: #ffffff3d;
border-radius: 5px;
border: none;
color: ${props => (props.dark ? '#000000' : '#ffffff')};
cursor: pointer;
max-width: 300px;
padding: 10px 12px;
text-align: left;
transition: background 85ms ease-in;
width: 100%;
&:hover {
    background-color: #ffffff52;
}
`

export const NewItemFormContainer = styled.div`
max-width: 300px;
display: flex;
flex-direction: column;
width: 100%;
align-items: flex-start;
`
export const NewItemButton = styled.button`
background-color: #5aac44;
border-radius: 5px;
border: none;
box-shadow: none;
color: #fffff;
padding: 6px 12px;
text-align: center;
`
export const NewItemInput = styled.input`
border-radius: 5px;
border: none;
box-shadow: #091e4240 0 1px 0 0;
margin-bottom: 0.5rem;
padding: 0.5rem 1rem;
width: 100%;
`

//Hide the dragged column

type DragPreviewContainerProps = {
    isHidden?: boolean
    isPreview?: boolean
}

export const DragPreviewContainer = styled.div<DragPreviewContainerProps>`
transform: ${props => (props.isPreview ? 'rotate(5deg)' : undefined)};
opacity: ${props => (props.isHidden ? 0 : 1)};
`
export const ColumnContainer = styled(DragPreviewContainer)`
background-color: #ebecf0;
width: 300px;
min-height: 40px;
margin-right: 20px;
border-radius: 3px;
padding: 8px 8px;
flex-grow: 0;
`

//Custom dragging preview

export const CustomDragLayerContainer = styled.div`
height: 100%;
width: 100%;
left: 0;
top: 0;
position: fixed;
z-index: 100;
pointer-events: none;
`

export const IconDelete = styled(AiFillDelete)`
font-size: 13px;
color: #bebebe;
cursor: pointer
`


