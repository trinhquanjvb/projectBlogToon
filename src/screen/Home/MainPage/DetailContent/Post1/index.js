import '../Post.scss'
import './Post1.scss'
import DefaultDetailContent from '../../../../../components/DefaultDetailContent'
import imgConfigure from './imgConfigurure'
import imgAccureateRip from './imgAccureateRip'

function Post1() {
   return (
      <>
         <DefaultDetailContent
            heading="<h1 class='topic__heading black__color'>Hướng dẫn rip đĩa CD sang FLAC bằng Exact Audio Copy</h1>"
            time="<div class='topic__time'>November 2, 2022 · 2 min read</div>"
            avatar='<img src="https://doko.clip-sub.com/img/avatar_doraemon.jpg">'
            title="<div class='content__title'>Doko</div>"
            position='<div>Adminnitrator</div>'
            headingsideBarPost='Cài dặt và config'
            lists={[
               'Cài đặt Exact Audio Copy (EAC)',
               'Khởi chạy',
               'Calibrate CD với AccurateRip',
            ]}
         >
            <p>
               Bài viết này sẽ hướng dẫn cách rip (sao chép và nén) đĩa nhạc
               sang định dạng WAV và chuyển đổi tiếp sang dạng nhỏ hơn (nhưng
               vẫn đảm bảo không mất dữ liệu - hay còn gọi là lossess): FLAC.
               Ngoài ra còn có thêm file log và cue sheet (dùng để định danh các
               track nhạc trong đĩa).
            </p>
            <h1 className='heading__1'>Cài dặt và config</h1>
            {/*  */}
            <h2 className='heading__2'>Cài đặt Exact Audio Copy (EAC)</h2>
            <ul className='listItem'>
               <li className='item'>
                  Tải về phiên bản mới nhất của Exact Audio Copy tại{' '}
                  <mark>đây</mark>.
               </li>
               <li className='item'>
                  Bộ cài này dành cho Windows. Quá trình cài đặt khá đơn giản,
                  bạn cũng có thể bỏ chọn GD3 Metadata Plugin vì plugin này phải
                  trả phí.
               </li>
               <li className='item'>
                  Bản cài đặt sẽ chiếm khoảng 20MB. Trong quá trình cài đặt bạn
                  sẽ được yêu cầu cài thêm{' '}
                  <mark>.NET Framework Runtime 3.5.</mark> Cứ tiếp tục cài kèm
                  là xong.
               </li>
            </ul>
            {/*  */}
            <h2 className='heading__2'>Khởi chạy</h2>
            <p className='pharse'>
               Nếu ở bước trước bạn vẫn cài đặt GD3 Metadata Plugin. Sẽ có popup
               hỏi dạng:
            </p>
            <div className='hightLight'>
               <div>
                  <span>icon</span>
                  <span className='hightLight__info'>INFO</span>
               </div>
               <p className='pharse'>
                  The test version of the GD3 metadata provider was installed
                  together with EAC. Do you want to use the 10 album lookups
                  test version as the current metadata provider?
               </p>
            </div>
            <p className='pharse'>
               thì chọn cancel, vì ta sẽ không sử dụng phần này.
            </p>
            {/*  */}
            <h2 className='heading__2'>Calibrate CD với AccurateRip</h2>
            <p className='pharse'>
               <mark>AccurateRip</mark> plugin sẽ được sử dụng để kiểm tra
               checksum với một cái đĩa đã có sẵn trong database. Sau khi đút
               đĩa vào ổ, nếu đĩa có thông tin trong database của AccurateRip,
               popup sau sẽ hiện ra. Nếu đĩa dùng được thì popup sẽ hiện.
            </p>
            <div className='mt-4'>
               <img src={imgConfigure} />
            </div>
            <p className='pharse mt-4'>
               Click vào nút Configure, popup sau có thể sẽ hiện ra. Nội dung:
            </p>
            <div className='mt-4'>
               <img src={imgAccureateRip} />
            </div>
            <div className='hightLight__minify my-4'>
               <p className='pharse '>
                  Congratulations, AccurateRip has been set up correctly. It is
                  recommended that this disc is ripped to test the accuracy of
                  your drive. Calculated offset value: +6 samples, +24 bytes.
               </p>
            </div>
            <p className='pharse'>
               Logo AccurateRip góc dưới bên phải sẽ cho biết AccurateRip đã
               được calibrate.
            </p>
            <p className='pharse'>(Còn tiếp...)</p>
            <div className='hightLight__wrap my-5'>
               <span>Tags:</span>
               <button className='btn'>software</button>
               <button className='btn'>vietnamese</button>
               <button className='btn'>guide</button>
            </div>
            <div className='select mb-5'>
               <div className='select__option hide__border'></div>
               <div className='select__option right'>
                  <h3 className='select__option--or mb-2'>Older Post</h3>
                  <h2 className='select__option--names right'>
                     Synchron combo - Yu-Gi-Oh Master Duel
                  </h2>
               </div>
            </div>
         </DefaultDetailContent>
      </>
   )
}

export default Post1
