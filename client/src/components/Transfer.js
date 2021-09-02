import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: #101522;
  margin-left: 20%;
  margin-right: 20%;
  margin-top: 40px;
  padding-top: 50px;
  flex-wrap: wrap;
  min-height: 20rem;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 960px) {
    width: 100%;
    margin-left: 0;
  }
`

const Item = styled.div`
  flex-grow: 1;
  height: 100px;
`

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    width: 80%;
  }
`;

export const FormTitle = styled.h2`
  color: #fff;
`

const FormItem = styled.div`
  flex-grow: 1;
`

export const FormInput = styled.input`
  padding: 10px 20px;
  border-radius: 2px;
  margin-right: 10px;
  outline: none;
  border: none;
  font-size: 16px;
  border: 1px solid #fff;


  &::placeholder {
    color: #242424;
  }

  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? '#4B59F7' : '#0467FB')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: ${({ primary }) => (primary ? '#0467FB' : '#4B59F7')};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

const Label = styled.label`
  color: white;
  margin-right: 10px;
`


const Transfer = ({ createTransfer, transfers, approveTransfer }) => {
    const [transfer, setTransfer] = useState(undefined);

    const updateTransfer = (e, field) => {
        const value = e.target.value;
        setTransfer({...transfer, [field]: value})
    }

    const submit = (e) => {
        e.preventDefault();
        createTransfer(transfer);
    }

    return (
        <Container>
          <Item>
            <FormTitle>Create transfer</FormTitle>
          </Item>
          <Item>
            <Form onSubmit={e => submit(e)}>
              <FormItem>
                <Label htmlFor="amount">Amount</Label>
                <FormInput
                  id="amount"
                  placeholder="insert amount: ex 1000"
                  type="text"
                  onChange={ e => updateTransfer(e, 'amount')}
                />
              </FormItem>
              <FormItem>
                <Label htmlFor="amount">to</Label>
                <FormInput
                  id="to"
                  placeholder="to address"
                  type="text"
                  onChange={ e => updateTransfer(e, 'to')}
                />
              </FormItem>
              <Button type="submit">Submit</Button>
            </Form>
          </Item>
        </Container>

    )
}

export default Transfer;