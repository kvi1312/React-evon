# USESTATE HOOK

- chỉ dùng được trong fnc compo
- thay đổi giao diện khi thay đổi data => dùng
- component được re-render sau khi setState
- khi đưa giá trị của 1 hàm tính toán vào làm initial value cho useState thì hãy sử dụng arrow fnc làm callback rồi đưa biểu thức tính toán đó vào, nó sẽ lấy giá trị return cuối cùng của fnc đó để làm tăng hiệu năng

# USEEFFECT HOOK

- sử dụng khi muốn dùng side effect (khi một chương trình được tác động mà gây thay đổi dữ liệu và nó trả về giao diện sau thi tác động dữ liệu thì đó đc gọi là side effect)

- _ỨNG DỤNG_ : EVENTS, CLOSURE, TIMERS, USESTATE, MOUNTED/ UNMOUNTED , ===, CALL API

- (ví dụ nằm trong file content)
- cấu trúc bao gồm : useEffect (callback, [dependencies]) , callback là bắt buộc, [dependencies] không bắt buộc
  _=> callback ở đây tự viết dùng để update side effect bao gồm : update dom, call api, listen dom event_
- call back luôn được gọi sau khi component được mounted
  _KHÔNG ĐƯỢC ASYNC USEEFFECT VÌ NÓ CẦN PHẢI ĐẢM BẢO ĐC CHẠY THEO ĐÚNG TRÌNH TỰ - SYNCHRONOUS_

# CÁC TRƯỜNG HỢP USEEFFECT HOOK

_1. useEffect (callback)_
-- CÓ NGHĨA LÀ USEEFFECT LUÔN LUÔN ĐƯỢC THỰC HIỆN SAU MỖI LẦN RENDER
--- gọi call back mỗi khi component re-render

_2. useEffect (callback, [])_
-- CÓ NGHĨA LÀ USEEFFECT SẼ CHẠY ĐÚNG 1 LẦN SAU LẦN RENDER ĐẦU TIÊN VÀ CALL BACK CHẠY ĐÚNG 1 LẦN KHI COMPONENT UNMOUNTED
-- chỉ gọi callback 1 lần sau khi component mounted
-- sử dụng khi muốn thực hiện logic 1 lần sau khi compo đc mount và không muốn nó re-render lại

_3. useEffect (callback, [deps])_
-- CÓ NGHĨA LÀ : REACT USE EFFECT SẼ DỰA VÀO GIÁ TRỊ DEPS TRONG LẦN RE-RENDER KẾ TIẾP, nó sẽ kiểm trả giá trị của deps mới so với deps trước đó, nếu khác nhau thì sẽ được thực hiện

-- deps : có thể là biến truyền từ ngoài vào, cũng có thể là state nằm trong component

-- callback sẽ được gọi lại mỗi khi deps thay đổi

_4. cleanup function_ :

-- trong call back của use effect nếu return ra 1 hàm thì hàm đó là clean up function

- cleanup fnc : dùng để tránh trường hợp callback của use effect nó gọi lại giá trị cũ mỗi khi re-render. mẹo là trong hàm return sẽ viết sự kiện đối nghịch ở trên hàm handle , dùng để clean up bộ nhớ

-- cleanup fnc sẽ gọi trước khi component đó bị unmounted
-- cleanup fnc luôn được gọi trước khi callback fn được gọi (trừ lần mounted)

-- Khi làm việc với react component mà phát hiện được componet có thể bị unmount bằng bất cứ hành động nào mà trong compo đó có sử dụng timer, async, event listener thì cần phải có clean up function

# LUỒNG HOẠT ĐỘNG CỦA USE EFFECT TRONG REACT COMPO

- _--- gọi callback sau khi component đc thêm vào dom => tức là lúc đầu nó vẫn chạy useEFect trước nhưng để đó, sau đó xử lý để đưa ele vào dom rồi nó mới quay lại back giá trị của useEFFECT_
  -- CÁC BƯỚC :
  ++ 1. Cập nhật lại state
  ++ 2. cập nhật lại dom (mutated- cập nhật lại prop trong dom node)
  ++ 3. Render lại UI
  ++ 4. Gọi clean up nếu deps thay đổi
  ++ 5. Render lại UI

# USE LAYOUT EFFECT:

-- CÁC BƯỚC :
++ 1. Cập nhật lại state
++ 2. cập nhật lại dom (mutated)
++ 3. Gọi clean up nếu deps thay đổi
++ 4. Gọi useLayoutEffect callback (sync)
++ 5. Render lại UI

# USE REF: (file app.js) - KHI MUỐN LƯU BIẾN MÀ KO HIỂN THỊ TREN UI THÌ DÙNG USE REF, MUỐN HIỂN THỊ TRÊN UI THÌ SỬ DỤNG USE STATE, CÓ THỂ GIẢI QUYẾT ĐƯỢC VẤN ĐỀ STATE CLOSURE, CÓ THỂ TRUY VẤN ĐẾN 1 CÂY DOM

-- là 1 hàm nhận initial value và nó chỉ sử dụng giá trị khởi tạo trong lần đầu khi compo đc mount, khi re-render thì ko dùng lại initial value

-- lưu các giá trị qua một tham chiếu bên ngoài function component

_LUÔN TRẢ VỀ OBJ CÓ PROP LÀ "reference.current"_ : MUỐN DÙNG GIÁ TRỊ CỦA NÓ THÌ PHẢI .CURRENT VÀO

_USE STATE VÀ USE REF ĐỀU CÓ THỂ GIỮ LẠI GIÁ TRỊ CỦA 1 BIẾN GIỮA NHỮNG LẦN COMPO RE-RENDER. NHƯNG USE STATE SẼ GÂY RA RERENDER CỦA 1 COMPO VÀ USE REF THÌ KO_

=> Gía trị của reference sẽ được giữ nguyên khi component re-render
=> Việc update reference sẽ không làm cho component re-render\*

# PHƯƠNG THỨC MEMO (MEMORY/ file app.js + memo.js) : XỬ LÝ COMPO ĐỂ TRÁNH BỊ RE-RENDER KHÔNG CẦN THIẾT

    #SỬ DỤNG: Khi compo cần sử dụng nhiều props ở trong 1 chức năng, và bên trong phải re-render lại khá nhiều UI gây ảnh hưởng performance, thì sử dụng Memo

_\_\_ TRONG REACT CÓ 3 PHƯƠNG THỨC HAY ĐƯỢC SỬ DỤNG: Hooks(dùng bên trong fnc compo), HOC(high order component- sẽ wrap lại fucntion component), render props - 3 thằng này dùng để kế thừa lại logic_

-- cách hoạt động :
++ memo sẽ check props của compo nó wrap sau mỗi lần re-render có bị thay đổi gía trị hay ko? nếu có thay đổi thì re-render còn ko thì ko được re-render
++ MỘT COMPO CÓ NHIỀU PROPS, CHỈ CẦN 1 PROPS THAY ĐỔI LÀ SẼ QUYẾT ĐỊNH RE-RENDER LẠI CONTENT

# USE CALL BACK : tránh tạo ra hàm mới ko cần thiết trong fnc component

- cú pháp : useCallBack((),[deps])
- custom props bằng cách sử dụng cú pháp "on + 'hành động gì đó'", khi đem props đó qua compo khác làm tham số thì phải destructuring nó ra

- _khi gán 1 biến = obj, function, array thì nó là 1 tham chiếu ko phải tham trị_

<!--
ví dụ tham trị: const a = 3, const b =3.  a===b =>true
ví dụ tham chiếu:
  let c = () =>{}  =====================> lúc này nó gán địa chỉ ở trong bộ nhớ là c
  let d = () =>{}. =====================> lúc này nó gán địa chỉ ở trong bộ nhớ là d
  c === d =>false =====================> vì c và d nằm ở 2 vùng nhớ khác nhau
 -->

# cách hoạt động : giúp chúng ta ghi nhớ 1 fucntion mà ko tạo lại 1 function mới => hàm được truyền vào useCallBack sẽ truyền vào 1 vùng tham chiếu duy nhất

- _khi đã xác định XÀI REACT.MEMO ĐỂ TRÁNH COMPONENT CON BỊ RE-RENDER KHÔNG CẦN THIẾT THÌ NHỮNG FUNCTION PHẢI SỬ DỤNG USECALLBACK ĐỂ FUNCTION ĐÓ KHÔNG BỊ RE-RENDER KHÔNG CẦN THIẾT_

# USE MEMO : TRÁNH THỰC HIỆN LẠI 1 LOGIC NÀO ĐÓ KHÔNG CẦN THIẾT

-- cú pháp : useMemo((),[deps])

# USE REDUCER : CUNG CẤP THÊM 1 SỰ LỰA CHỌN ĐỂ SỬ DỤNG STATE CHO FUNCTION COMPONENT

-cách xài : gọi useReducer ra với cú pháp useReducer(reducer, initState)

- hầu hết mọi trường hợp sử dụng useState sử dụng cho compo có state đơn giản như : số, chuỗi, boolean hoặc các kiểu array, obj 1 cấp

_KHI DỮ LIỆU CÁC STATE QUÁ NHIỀU HOẶC PHỤ THUỘC NHAU THÌ SỬ DỤNG USE REDUCER_

- luồng hoạt động :
  //1. Init state
  //2. Actions:
  //3. Reducer : là 1 hàm nhận đầu vào là state và action, dựa vào action mà trả ra state mới, và state mới luôn cùng dữ liệu với initState
  //4. Dispatch : _dispatch là một HÀNH ĐỘNG nhằm giúp ACTION ĐƯỢC KÍCH HOẠT, từ đó state đc thay đổi và re-render ra_

# USE CONTEXT : TRUYỀN DỮ LIỆU TỪ COMPO CHA XUỐNG BẤT KÌ COMPO CON NÀO MÀ KHÔNG CẦN DÙNG PROPS

- cách sử dụng :
  ++ đặt biết abc = createContext() => nó sẽ trả về obj gồm provider và consumer, dùng thẻ <abc.Provider value={xyz}></abc.Provider> để bao cả thằng cha lại
  ++ bên thằng con thì đặc biến để để nhận giá trị của thằng cha. ví dụ : const child = useContext(xyz)
- gồm 3 bước :
  ++ 1. create context
  ++ 2. Provider (nhà cung cấp)
  ++ 3. Consumer (đối tượng sử dụng)
