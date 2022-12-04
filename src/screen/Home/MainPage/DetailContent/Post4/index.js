import DefaultDetailContent from '../../../../../components/DefaultDetailContent'

function Post4() {
   const firstCode =
      'interface IAccountVault { function deposit(address account, uint256 amount) external;'
   const lastCode =
      'function withdraw(address account, uint256 amount) external; }'
   const code =
      '// Sẽ bị compiler báo lỗi function deposit(address account, uint256 amount)internal;'
   return (
      <DefaultDetailContent
         heading="<h1 class='topic__heading black__color'>Solidity self-notes</h1>"
         time="<div class='topic__time'>April 14, 2022 · One min read</div>"
         avatar='<img src="https://doko.clip-sub.com/img/avatar_doraemon.jpg">'
         content__title="<div class='content__title'>Doko</div>"
         position='<div>Adminnitrator</div>'
      >
         <p className='pharse'>
            Trong solidity, các hàm trong interface luôn phải có từ khoá{' '}
            <code>external</code>
         </p>
         <div className='wrap__code my-4'>
            <p className='pharse'>
               // SPDX-License-Identifier: Apache-2.0 pragma solidity 0.8.4;
            </p>
            <p className='pharse'>import "./Library.sol";</p>
            <p className='pharse'>{firstCode}</p>
            <p className='pharse'>{lastCode}</p>
         </div>
         <p className='pharse'>
            cũng có thể có thêm <code>view:</code>
         </p>
         <div className='wrap__code my-4'>
            <p className='pharse'>
               function deposit(address account, uint256 amount) external;
            </p>
         </div>
         <p className='pharse'>
            nhưng không có <code>internal:</code>
         </p>
         <div className='wrap__code my-4'>
            <p className='pharse'>{code}</p>
         </div>
         <div className='hightLight__wrap mb-5'>
            <span>Tags:</span>
            <button className='btn'>programing</button>
            <button className='btn'>english</button>
         </div>
         <div className='select mb-5'>
            <div className='select__option mb-2'>
               <h3 className='select__option--or mb-2'>Newer Post</h3>
               <h2 className='select__option--names'>Thể ていない</h2>
            </div>
            <div className='select__option right mb-2'>
               <h3 className='select__option--or mb-2'>Older Post</h3>
               <h2 className='select__option--names right'>Rusty Diary (03)</h2>
            </div>
         </div>
      </DefaultDetailContent>
   )
}

export default Post4
