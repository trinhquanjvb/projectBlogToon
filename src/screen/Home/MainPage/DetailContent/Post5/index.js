import DefaultDetailContent from '../../../../../components/DefaultDetailContent'

function Post5() {
   const code1 = 'enum Foo{ A(u64), B([u64; 1000])}'
   const code2 =
      "#[derive(Debug)] pub struct Foo { s: &'static str } impl Foo { pub fn new(s: &'static str) -> Foo { Foo{s} } }"
   const code3 =
      'mod foo1; fn main() { let f = foo1::Foo::new("Hello"); println!("{:?}", f); }'
   return (
      <DefaultDetailContent
         heading="<h1 class='topic__heading black__color'>Rusty Diary (03)</h1>"
         time="<div class='topic__time'>November 18, 2021 · One min read</div>"
         avatar='<img src="https://doko.clip-sub.com/img/avatar_doraemon.jpg">'
         content__title="<div class='content__title'>Doko</div>"
         position='<div>Adminnitrator</div>'
      >
         <div style={{ overflow: 'hidden' }}>
            <img src='https://doko.clip-sub.com/assets/images/rulu-rusty-df85338f23bffd7e8b2ccbd534e4107a.jpg' />
         </div>
         <p className='pharse'>Rusty diary, part 3</p>
         <h2 className='heading__2'>
            Enum sẽ bị giới hạn bởi số cận trên lớn hơn
         </h2>
         <div className='wrap__code'>
            <pre>
               <code>{code1}</code>
            </pre>
         </div>
         <h2 className='heading__2'>Modularization</h2>
         <p className='pharse'>
            Rust không coi file là các "file", mà coi chúng như các module (gần
            với Java, theo package). Nếu chia file nhỏ ra thì không cần phải bao
            ngoài module bằng từ khóa mod:
         </p>
         <div className='wrap__code my-4'>
            <div>foo1.rs</div>
            <div>{code2}</div>
         </div>
         <p className='pharse'>sau đó là gọi trực tiếp:</p>
         <div className='wrap__code my-4'>
            <div>main.rs</div>
            <div>{code3}</div>
         </div>
         <p className='pharse'>
            Vì vậy khuyến cáo là enum thì nên để cùng kiểu biến, như Typescript.
         </p>
         <div className='hightLight__wrap mt-5'>
            <span>Tags:</span>
            <button className='btn'>vietnamese</button>
            <button className='btn'>rush</button>
         </div>
         <div className='select my-5'>
            <div className='select__option'>
               <h3 className='select__option--or mb-2'>Newer Post</h3>
               <h2 className='select__option--names'>Solidity selsf-notes</h2>
            </div>
            <div className='select__option right'>
               <h3 className='select__option--or mb-2'>Older Post</h3>
               <h2 className='select__option--names right'>
                  Games that are cleared from my backlog (so far) in 2011
               </h2>
            </div>
         </div>
      </DefaultDetailContent>
   )
}

export default Post5
