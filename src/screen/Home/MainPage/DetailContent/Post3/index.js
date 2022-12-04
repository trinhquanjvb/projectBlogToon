import DefaultDetailContent from '../../../../../components/DefaultDetailContent'

function Post3() {
   return (
      <DefaultDetailContent
         heading="<h1 class='topic__heading black__color'>Thể ていない</h1>"
         time="<div class='topic__time'>May 3, 2022 · One min read</div>"
         avatar='<img src="https://doko.clip-sub.com/img/avatar_doraemon.jpg">'
         content__title="<div class='content__title'>Doko</div>"
         position='<div>Adminnitrator</div>'
      >
         <p className='pharse'>
            Thể ていない có thể được rút gọn lại (bỏ い sau て). Nói cách khác:
            Có thể lược bỏ chữ いtrong thể Vて[い]る
         </p>
         <div className='hightLight__wrap my-5'>
            <span>Tags:</span>
            <button className='btn'>japanese</button>
            <button className='btn'>grammar</button>
         </div>
         <div className='select mb-5'>
            <div className='select__option'>
               <h3 className='select__option--or mb-2'>Newer Post</h3>
               <h2 className='select__option--names'>
                  Synchron combo - Yu-Gi-Oh Master Duel
               </h2>
            </div>
            <div className='select__option right'>
               <h3 className='select__option--or mb-2'>Older Post</h3>
               <h2 className='select__option--names'>Solidity self-notes</h2>
            </div>
         </div>
      </DefaultDetailContent>
   )
}

export default Post3
