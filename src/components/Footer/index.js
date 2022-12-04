import './Footer.scss'

function Footer() {
   return (
      <div className='footer'>
         <div className='container'>
            <div className='row'>
               <div className='col-lg-4 '>
                  <h1 className='footer__heading mt-4 mb-3'>
                     Bài đăng theo ngôn ngữ
                  </h1>
                  <div className='footer__item'>Tiếng Việt</div>
                  <div className='footer__item'>English</div>
                  <div className='footer__item'>日本語</div>
               </div>
               <div className='col-lg-4 '>
                  <h1 className='footer__heading mt-4 mb-3'>Liên hệ</h1>
                  <div className='footer__item'>Emai</div>
                  <div className='footer__item'>Stream</div>
                  <div className='footer__item'>Github</div>
               </div>
               <div className='col-lg-4 '>
                  <h1 className='footer__heading mt-4 mb-3'>Chủ đề</h1>
                  <div className='footer__item'>Lập trình</div>
                  <div className='footer__item'>Fansub</div>
                  <div className='footer__item'>Doraemon</div>
                  <div className='footer__item'>Khác</div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Footer
