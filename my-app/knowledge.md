# REACT LÀ THƯ VIỆN ĐỂ TẠO RA SPA

# SPA - SINGLE PAGE APLLICATION : KHÔNG YÊU CẦU TẢI LẠI TRANG TRONG QUÁ TRÌNH SỬ DỤNG, DỄ BÓC TÁCH FE VÀ BE, PHÁT TRIỂN MOBILE APP DỄ DÀNG, SPA PHỤ THUỘC HOÀN TOÀN VÀO JS

# MPA - MULTI PAGE APPLICATION : TẢI LẠI TRANG TRONG QUÁ TRÌNH SỬ DỤNG

# REACT.CREATEELEMENT(type, props, children) -> trả về react element

- thằng nằm giữa thẻ 2 tag trong react không được gọi là innerText mà được gọi là children
- children thực ra cũng là 1 props

# REACT DOM

- là cầu nối giữa react và dom

# JSX

- _JSX CẦN 1 THẰNG CHA BỌC BÊN NGOÀI KHI VIẾT_
- được sinh ra để viết html trong react, jsx không phải là html
- KHI MUỐN VIẾT CODE JAVASCRIPT TRONG JSX THÌ SỬ DỤNG {} ĐỂ VIẾT HOẶC ĐỂ CHÈN BIẾN VÀO
- khi render từ array ra html sẽ có cảnh báo unikey key prop. fix bằng cách truyền index của mảng vào
- babel không hỗ trợ render 2 element cùng lúc. cách fix : sử dụng <> - hỗ trợ wrap ele nhưng không sinh ra thẻ div hay gì cả

# COMPONENT

- là những phần tử của 1 project
- chia nhỏ ra để dễ sử dụng gồm functional component và class component

# REACT ELEMENT TYPEs

- string, function/class,
- function trong react sẽ được để trong <fnAbc/>
- hiện tại 100% sử dụng function component

# PROPS

- là những thuộc tính của component
- những thằng function trong react được gọi là react component
- những thẻ jsx nhìn giống html sẽ được gọi là react element
- prop "KEY" là trường hợp đặt biệt nó giống như id
- sử dụng 1 function để get data và 1 function để set style jsx để render

  - REACT-ELEMENTS (JSX):

    - sử dụng props giống như attribute của thẻ html
    - ĐẶC BIỆT: 2 props class, for => className, htmlFor
    - PHẢI TUÂN THEO QUY ƯỚC CÓ SẴN

  - REACT-COMPONENT (function):
    - sử dụng props giống như đối số cho Function
    - _tự do dặt tên props: đặt theo camelCase, có thể bao gồm dấu gạch ngang_

# RENDERING LIST

- khi sử dụng map để render data từ mãng obj thì xài ngoặc tròn khi muốn render ra jsx. ví dụ như youtubedata.map(item => (...))
- cần phải có key để render
- khi truyền biến vào class thì sử dụng backstick và curly phrase : {`abc ${xyz}`}

# STATE : TRẠNG THÁI

_STATELESS FUNCTIONAL COMPONENT_ : là component nhưng không sử dụng state
_STATEFUL FUNCTIONAL COMPONENT_ : là component nhưng có sử dụng state
_STALE STATE (trạng thái cũ)_ : là hiện tượng giá trị không phản ánh đúng thực tế, cách fix là sử dụng call back để khiến giá trị sau được tính bằng giá trị trước

- những thông tin chứa trong component: ví dụ những thông tin user, pass, ngày sinh trong component sign up
- state change -> re-render : để reload dom ra ngoài giao diện

# USESTATE HOOK

- là trạng thái của dữ liệu
- _đơn giản hóa việc đưa dữ liệu ra giao diện => dữ liệu thay đổi gì giao diện thay đổi đó_
- khi sử dụng state sẽ có 4 bước:
  // 1. enabling state : useState()
  // 2. initialize state : useState(initial value, function to set Value)
  // 3. reading state :
  // 4. updating state
- cách đặt tên initialize value : biến đầu tiên- abc, biến thứ 2- setAbc

# HOOK

- Là tính năng cho phép sử dụng state và những tính năng khác mà không cần dùng class, được sử dụng trong functional component
- TẤT CẢ HOOK LÀ HÀM VÀ HOOK ĐC GẮN VÀO COMPONENT
- _nguyên tắc sử dụng hook_ : _phải viết ở trên cùng, không được viết ở câu điều kiện/ vòng lặp/không được viết trong nested function_

# OBJECT DESTRUTURING

const student = {
name : 'khaile',
age: 28
}
const {name, age}= student
clg(name, age)

# USE REDUCER : KHI SỬ DỤNG CÁC GIÁ TRỊ PHỨC TẠP NHƯ OBJ, ARRAY THÌ SỬ DỤNG USE REDUCER (file card)

- cú pháp :

- luồng hoạt động :
  //1. Init state : const [state, dispatch] = useReducer(reducer, initialValue) ==> với state, dispatch là để gọi, còn reducer, initial value là để khởi tạo
  //2. Actions: phân tích những action cần thiết trong dự án
  //3. Reducer : là 1 hàm nhận đầu vào là state và action, dựa vào action mà trả ra state mới, và state mới luôn cùng dữ liệu với initState
  //4. Dispatch : _dispatch là một HÀNH ĐỘNG nhằm giúp ACTION ĐƯỢC KÍCH HOẠT, từ đó state đc thay đổi và re-render ra_

-- state ban đầu là immutable (ko thể thay đổi), nên muốn set lại thì phải sử dụng spread operator "...",
nhưng nếu state ban đầu là obj quá sâu thì sử dụng deep copy

_công thức DEEP COPY : JSON.PARSE(JSON.STRINGIFY(OBJ))_

# CSS MODULE

-- viết dưới dạng module

- viết class theo kiểu camle case

# STYLE COMPONENT : code css trong file js (project card)

-- cài đặt : npm i styled-components --save
-- import styled from "styled-components";
_import vào file js bằng cú pháp :_
-- viết css bên ngoài compo ko đc viết trong funcitonal compo :
_const StyleAbc = styled.tag(h1,h2,div,span....)_

-- props inside styled-component : gõ cú pháp nhanh "scp" để truyền props trực tiếp trong css ===================> ${(props) =>props.ABC && css``}; muốn sử dụng thì truyền props vào tag + khi sử dụng inline props nuế việc cần xử lý ít, ngược lại nếu dài thì viết riêng ra

-- import { createGlobalStyle } from "styled-components" : dùng để viết file css global
-- có thể code theo kiểu sass (file Card2.js) :

-- _sử dụng theme trong styled component_ : import ThemeProvider

# TAILWINDCSS : mỗi class thực hiện 1 chức năng riêng biệt (file cardtailwind.js)

-- INSTALL : npm i tailwindcss

-- jit mode : cú pháp ====> abc-[...]
-- _SỬ DỤNG PROPS TRONG TAILWIND_
-- các chỉ số của boxshadow trong tailwind được truyền nối nhau bằng dấu gạch dưới

# USE EFFECT HOOK : DÙNG ĐỂ SỬ LÝ SIDE EFFECT (file header.js, timer.js, counter.js)

-- SIDE EFFECT: là khi xử lý bên trong function mà lại ảnh hưởng bên ngoài giao diện

- _ỨNG DỤNG_ : EVENTS, CLOSURE, TIMERS, USESTATE, MOUNTED/ UNMOUNTED , ===, CALL API

- CẤU TRÚC : useEffect(callback, [deps]),
  -- khi làm việc với obj thì nên truyền chính xác giá trị của nó vào
  _1. useEffect (callback)_

  - CÓ NGHĨA LÀ USEEFFECT LUÔN LUÔN ĐƯỢC THỰC HIỆN SAU MỖI LẦN RENDER
  - gọi call back mỗi khi component re-render

  _2. useEffect (callback, [])_

  - CÓ NGHĨA LÀ USEEFFECT SẼ CHẠY ĐÚNG 1 LẦN SAU LẦN RENDER ĐẦU TIÊN VÀ CALL BACK CHẠY ĐÚNG 1 LẦN KHI COMPONENT UNMOUNTED
  - chỉ gọi callback 1 lần sau khi component mounted
  - sử dụng khi muốn thực hiện logic 1 lần sau khi compo đc mount và không muốn nó re-render lại

  _3. useEffect (callback, [deps])_

  - CÓ NGHĨA LÀ : REACT USE EFFECT SẼ DỰA VÀO GIÁ TRỊ DEPS TRONG LẦN RE-RENDER KẾ TIẾP, nó sẽ kiểm trả giá trị của deps mới so với deps trước đó, nếu khác nhau thì sẽ được thực hiện

    # CLEAN UP FUNCTION :

          -- dùng để tránh trường hợp callback của use effect nó gọi lại giá trị cũ mỗi khi re-render. mẹo là trong hàm return sẽ viết sự kiện đối nghịch ở trên hàm handle , dùng để clean up bộ nhớ
          -- clean up fnc sẽ đc gọi trước khi component bị unmount

    # khi sử dụng onchange để call api thì nên sử dụng LODASH.DEBOUNCE() để tránh api bị call liên tục : (file hackernews.js)

          -- sử dụng package lodash : npm i lodash
          -- dùng lodash.debounce() để wrap cái thằng setvalue của on change khiến api bị call liên tục

# USE REF : THƯỜNG DÙNG KHI TRUY XUẤT VÀO DOM, lưu các giá trị qua một tham chiếu bên ngoài function component

-- cú pháp : const abcRef = useRef(initialValue)

    -- là 1 hàm nhận initial value và nó chỉ sử dụng giá trị khởi tạo trong lần đầu khi compo đc mount, khi re-render thì ko dùng lại initial value

      _LUÔN TRẢ VỀ OBJ CÓ PROP LÀ "reference.current"_ : MUỐN DÙNG GIÁ TRỊ CỦA NÓ THÌ PHẢI .CURRENT VÀO, có thể sử dụng làm props trung gian để lưu các giá trị tham chiếu bên ngoài fnc compo

      _USE STATE VÀ USE REF ĐỀU CÓ THỂ GIỮ LẠI GIÁ TRỊ CỦA 1 BIẾN GIỮA NHỮNG LẦN COMPO RE-RENDER. NHƯNG USE STATE SẼ GÂY RA RERENDER CỦA 1 COMPO VÀ USE REF THÌ KO_

- khi compo chưa được mount mà đã thoát thao tác mount trước đó thì sẽ sinh ra lỗi, có thể fix lỗi đó bằng cách sử dụng useREf

# CUSTOM HOOK : KHI MUỐN CUSTOM THÌ PHẢI ĐẶT TÊN HOOK BẮT ĐẦU BẰNG CHỮ USE (file app.js)

- return nó về 1 dạng gì đó bên file custome hook, có thể là obj, arr...
- ở file muốn sử dụng hook thì khai báo 1 biến bằng kiểu dữ liệu của hook cần dùng rồi gán nó bằng vơi cái hook, ví dụ const {}= useLinkNewTab()

# FORM (file input.js, thư mục form) : HỌC VỀ THƯ VIỆN FORMIK

- mỗi input có 1 cái name riêng biệt, dự theo name đó để set state, có thể truy cập bằng cách [e.target.name]
  -- bài tập Movie db : thư mục form-library
  - học đc thêm cách viết loading skeleton

_cài thư viện FORMIK : npm i formik --save_

    # sử dụng formik : import { useFormik } from "formik";

    + với formik là 1 obj hỗ trợ nhiều phương thức, muốn xài cái nào thì gọi ra để thiết lập hoặc để sử dụng để truyền dữ liệu

      -touched : trả về true hoặc false. khi mà nhấn vào 1 input và nhấn ra ngoài thì hiện tượng đó gọi là touched khi gõ vào thì xài handle change, khi nhấn ra ngoài là handleblur(có sẵn trong formik)
      - {...formik.getFieldProps(key)} : ggiúp tự động add vào value, name, event của input với tên key được truyền vào

      - Formik, Form, ErrorMessage, Field...

_cài thư viện YUP : npm i yup --save_

    # sử dụng : import * as yup, gọi validationSchema:Yup.object({...}) để truyền vào validate

- TỐI ƯU CODE THEO CÁC PHƯƠNG THỨC CÓ SẴN CỦA FORMIK (FILE FORM FINAL)
  - trong feild có props "as" là để set nó là textarea hay dropbox...
  - formik có cái hook tên useField để tối ưu code
  - formik có cái phương thức setSubmitting để set trạng thái cho form đã submit hay chưa, từ đó có thể thiết kế giaoiẹnện loading khi nút đangsubmit

_CÀI ĐẶT THƯ VIỆC REACT HOOK FORM: npm install react-hook-form _ (file signupformhook)

        - trong useForm(): hỗ trợ phương thức register(name,{...}) để cài đăng ký dữ liệu được gửi đi, và handleSubmit để handle dữ liệu được gửi đi, formState:{...}

        - VALIDATION REACT HOOK FORM:
           + cài đặt thư viện yupresolver để sử dụng với hookform : npm install @hookform/resolvers yup
           + isValid: khi sử dụng isValid của FormState thì nó luôn mặc định giá trị là false, vì vậy phải thêm mod:onchange vào cho useForm()

           + isDirty: khi đã chạm vào bất kì trường nào thì giá trị của isDirty = true
           + dirtyField: giống isDirty nhưng nó trả về 1 obj chứa các trường nào đã chạm vào

           +controller: phải có default value

           + useController : sử dụng cho việc kiểm soát component

=====> SỬ DỤNG VITE FRAMEWORK ĐỂ CÀI REACT CHO NHANH HƠN CREATE-REACT-APP

# FRAGMENTS : KHI DÙNG THẺ DIV ĐỂ BAO BIẾN LẠI THÌ NÓ SẼ KHIẾN THAY ĐỔI LAYOUT, KHI ĐÓ SỬ DỤNG THẺ <Fragment> hoặc <></> THAY CHO THẺ DIV ĐỂ HẾT LỖI MÀ LAYOUT KHÔNG CẦN PHẢI THÊM THẺ DIV

# PORTAL: ĐƯA 1 PHẦN TỬ NẰM RIÊNG BÊN NGOÀI (KO NẰM TRONG THẺ NÀO HẾT), CÙNG CẤP VỚI THẰNG DIV CÓ DIV ROOT

- CÁCH SỬ DỤNG :

  - import ReactDOM from "react-dom"
  - ReactDOM.createPortal(<div></div>, document.querySelector("body"))

- trong dropdown: dù có overflow nào đi nữa, trừ overflow-visible thì dropdown vẫn bị cut => sử dụng portal

# package REACT-ERROR-BOUNDARY : package để báo lỗi trong react

install : npm i react-error-boundary

# package PROPS TYPE : PHÁT TRIỂN COMPO TỐT HƠN, GIÚP NGƯỜI DÙNG BIẾT COMPO CẦN PROPS GÌ VÀ KIỂU DỮ LIỆU CỦA NÓ HOẶC TÍNH BẮT BUỘC

npm i prop-types

# package CSS TRANSITION GROUP : ỨNG DỤNG ĐỂ SHOW CÁC COMPONENT MODAL CẦN THIẾT MÀ KO BỊ ĐÈ LÊN NHAU, GIẢI QUYẾT VẤN ĐỀ TRANSITION (file modalbase, index.scss, portaladvance )

npm i react-transition-group

- khi truyền vào classname vào CSSTransition nó sẽ sinh ra các class mới bắt đầu bằng tên class được truyền vào

# CONTEXT : SẼ CUNG CẤP 1 PHƯƠNG PHÁP ĐỂ CHIA SẼ GIÁ TRỊ GIỮA CÁC COMPONENT VỚI NHAU

=> hạn chế trường hợp props drilling khi truyền props thông qua quá nhiều component từ ông sang cháu

- sử dụng const abc = createContext()
- gọi abc.Provider ở hàm cần trả về
  \*\* CONTEXT CẦN TRUYỀN PHẢI NẰM TRONG PROVIDER NẾU KO SẼ LỖI, TRONG PROVIDER CÓ PROPS LÀ VALUE
- localstorage có cái hook riêng để sử dụng mà ko cần phải tính toán

# ROUTER : npm install react-router-dom (Blogpage, profilepage, nav)

- sau khi install thì import {BrowserRouter} vào file index.js rồi wrap app lại
- <Routes> sẽ chứa các thằng <Route> con, <Route path="" element="">, nếu path="\*" dùng để báo page đó ko tồn tại
- path="abc/:slug" : dùng để truyền các giá trị như giá trị page hoặc id của item...
- import {Link} các các component route con : sử dụng <Link to={"/abc"}> để biến link để 1 trang khác mà ko reload lại trang
- import {NavLink} : đây là thẻ sử dụng để hiện hiệu ứng active của 1 trang đang được truy cập

- {import Outlet} : khi muốn tất cả các trang có điểm chung (ví dụ là thanh nav) thì sẽ sinh đc gọi là nested route, lúc này sử dụng outlet ở thằng nav để lôi nội dung của những thằng sử dụng thằng nav mà hiển thị lên

- useParam (react-router-dom): dùng để lấy giá trị của slug được truyền vào
- useNavigate (react-router-dom) : dùng để điều hướng
- useSearchParams : dùng để lấy giá trị được nhập vào để tìm kiếm (xem vị dụ ở blogpage.js)

# DESIGN PATTERN (THƯ MỤC ADVANCE, HOC, RENDER PROPS)

- HOC là 1 design pattern giúp 1 logic được tái sử dụng mà không cần phải viết lại

- Render props : Hiểu đơn giản thì render props là một phương pháp có mục đích tương tự với phương pháp sử dụng Higher Order Component, giúp chúng ta sử dụng lại logic trên nhiều component. Render Props được dùng để tạo nên thư viện vô cùng nổi tiếng trong hệ sinh thái React, đó là React-Router. dễ gây ra nested

- Custom Hook:
  - để đổi tên props của hook thì sử dụng dấu ":" ví dụ
    const {value: value2} = useValue()

- React Composition