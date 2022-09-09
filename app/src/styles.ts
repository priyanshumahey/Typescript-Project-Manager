import styled from "styled-components";

export const AppContainer = styled.div`
    align-items: flex-start;
    background-color: #97e8ef;
    display: flex;
    flex-direction: row;
    height: 100%;
    padding: 2vh;
    width: 100%;
`

export const ColumnContainer = styled.div`
    background-color: #ebf6f7;
    width: calc(8em + 7vw);
    min-height: 40px;
    margin-right: 20px;
    border-radius: 3px;
    padding: 8px 8px;
    flex-grow: 0;
`

export const ColumnTitle = styled.div`
    padding 6px 16px 12px;
    font-weight: bold;
`

export const CardContainer = styled.div`
    background-color: #ff;
    cursor: pointer;
    margin-bottom: 0.5rem;
    padding: 0.5rem 1rem;
    max-width: 300px;
    border-radius: 3px;
    box-shadow: #091e4240 1px 1px 1px 1px;
`