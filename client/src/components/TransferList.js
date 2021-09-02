import styled from "styled-components";
import React from 'react';

const Container = styled.div`
  display: flex;
  background-color: #101522;
  align-items: flex-start;
  margin-top: 20px;
  margin-left: 20%;
  margin-right: 20%;
  height: 140px;
  justify-content: center;


  @media screen and (max-width: 960px) {
    width: 100%;
    margin-left: 0;
  }
`

const TransferList = ({ transfers, approveTransfer }) => {
    return (
       <Container>
         <table>
            <thead>
               <tr>
                   <th>Id</th>
                   <th>Amount</th>
                   <th>to</th>
                   <th>approvals</th>
                   <th>sent</th>
               </tr>
            </thead>
            <tbody>
                {transfers.map(transfer => (
                   <tr key={transfer.id}>
                       <td>{transfer.id}</td>
                       <td>{transfer.amount}</td>
                       <td>{transfer.to}</td>
                       <td>
                           {transfer.approvals}
                            <button onClick={() => approveTransfer(transfer.id)}>Approve</button>
                       </td>
                       <td>{transfer.sent ? 'yes' : 'no'}</td>

                   </tr>
                ))}
            </tbody>
         </table>
      </Container>
    )
}

export default TransferList;