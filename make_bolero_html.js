const fs = require("fs");
function nvi(n){
  const ones=["","M\u1ed9t","Hai","Ba","B\u1ed1n","N\u0103m","S\u00e1u","B\u1ea3y","T\u00e1m","Ch\u00edn"];
  const teens={10:"M\u01b0\u1eddi",11:"M\u01b0\u1eddi m\u1ed9t",12:"M\u01b0\u1eddi hai",13:"M\u01b0\u1eddi ba",14:"M\u01b0\u1eddi b\u1ed1n",15:"M\u01b0\u1eddi l\u0103m",16:"M\u01b0\u1eddi s\u00e1u",17:"M\u01b0\u1eddi b\u1ea3y",18:"M\u01b0\u1eddi t\u00e1m",19:"M\u01b0\u1eddi ch\u00edn"};
  const tens={2:"Hai m\u01b0\u01a1i",3:"Ba m\u01b0\u01a1i",4:"B\u1ed1n m\u01b0\u01a1i",5:"N\u0103m m\u01b0\u01a1i",6:"S\u00e1u m\u01b0\u01a1i",7:"B\u1ea3y m\u01b0\u01a1i",8:"T\u00e1m m\u01b0\u01a1i",9:"Ch\u00edn m\u01b0\u01a1i"};
  if(n===100) return "M\u1ed9t tr\u0103m";
  if(n<10) return ones[n];
  if(n<20) return teens[n];
  const t=Math.floor(n/10),o=n%10,base=tens[t];
  if(o===0) return base;
  if(o===1) return base+" m\u1ed1t";
  if(o===5) return base+" l\u0103m";
  return base+" "+ones[o].toLowerCase();
}
const TITLES=[
"Bi\u1ec3n T\u00ecnh","Ni\u1ec7m Kh\u00fac Cu\u1ed1i","Ph\u00fat Cu\u1ed1i","T\u00ecnh \u0110\u1eddi","\u0110\u00eam \u0110\u00f4ng",
"S\u1ea7u \u0110\u00f4ng","L\u1ec7 \u0110\u00e1","N\u1ed7i Bu\u1ed3n Hoa Ph\u01b0\u1ee3ng","T\u00e0u \u0110\u00eam N\u0103m C\u0169","\u0110\u1eafp M\u1ed9 Cu\u1ed9c T\u00ecnh",
"Ng\u01b0\u1eddi Ngo\u00e0i Ph\u1ed1","Th\u00e0nh Ph\u1ed1 Bu\u1ed3n","M\u01b0a N\u1eeda \u0110\u00eam","V\u00f9ng L\u00e1 Me Bay","Chi\u1ec1u T\u00edm",
"Gi\u1ecdt L\u1ec7 \u0110\u00e0i Trang","Con \u0110\u01b0\u1eddng X\u01b0a Em \u0110i","M\u1ed9t M\u00ecnh","Duy\u00ean Ph\u1eadn","Nh\u1eefng \u0110\u1ed3i Hoa Sim",
"B\u1ea1c Tr\u1eafng L\u1eeda H\u1ed3ng","V\u1ec1 \u0110\u00e2u M\u00e1i T\u00f3c Ng\u01b0\u1eddi Th\u01b0\u01a1ng","Thi\u00ean Duy\u00ean Ti\u1ec1n \u0110\u1ecbnh","\u0110\u00eam Bu\u1ed3n T\u1ec9nh L\u1ebb","\u00c1o Anh S\u1ee9t Ch\u1ec9 \u0110\u01b0\u1eddng T\u00e0",
"T\u00ecnh L\u1ee1","C\u0103n Nh\u00e0 Ngo\u1ea1i \u00d4","L\u01b0u B\u00fat Ng\u00e0y Xanh","\u0110\u1eebng N\u00f3i Xa Nhau","N\u1eeda \u0110\u00eam Ngo\u00e0i Ph\u1ed1",
"Xin C\u00f2n G\u1ecdi T\u00ean Nhau","T\u00ecnh Y\u00eau \u0110i Qua","M\u00f9a \u0110\u00f4ng C\u1ee7a Anh","Hoa Trinh N\u1eef","Bu\u1ed3n",
"R\u1eebng X\u01b0a \u0110\u00e3 Kh\u00e9p","Bi\u1ec3n Nh\u1edb","Di\u1ec5m X\u01b0a","C\u00f2n Ch\u00fat G\u00ec \u0110\u1ec3 Nh\u1edb","H\u1eb9n H\u00f2",
"M\u01b0a H\u1ed3ng","Tu\u1ed5i \u0110\u00e1 Bu\u1ed3n","Nh\u01b0 C\u00e1nh V\u1ea1c Bay","Em \u0110i Tr\u00ean C\u1ecf Non","T\u00ecnh Kh\u00fac Th\u00e1ng S\u00e1u",
"M\u00f9a Thu Cho Em","Ru Ta Ng\u1eadm Ng\u00f9i","\u1ede Hai \u0110\u1ea7u N\u1ed7i Nh\u1edb","\u0110\u00eam Nghe Ti\u1ebfng M\u01b0a","T\u00ecnh S\u1ea7u",
];
TITLES.push(
"Kh\u00fac Th\u1ee5y Du","M\u1ed9t C\u00f5i \u0110i V\u1ec1","Nh\u01b0 M\u1ed9t L\u1eddi Chia Tay","H\u1ea1 Tr\u1eafng","Tu\u1ed5i Ng\u1ecdc",
"Chi\u1ec1u M\u1ed9t M\u00ecnh Qua Ph\u1ed1","G\u1ecdi T\u00ean B\u1ed1n M\u00f9a","Em C\u00f2n Nh\u1edb M\u00f9a Xu\u00e2n","Ng\u01b0\u1eddi T\u00ecnh Kh\u00f4ng \u0110\u1ebfn","C\u00f4 \u0110\u01a1n",
"T\u00ecnh Y\u00eau Tr\u1ea3 L\u1ea1i Tr\u0103ng Sao","Anh C\u00f2n N\u1ee3 Em","S\u1ea7u L\u1ebb B\u00f3ng","\u0110\u00eam Cu\u1ed1i","Khi Ng\u01b0\u1eddi Y\u00eau T\u00f4i Kh\u00f3c",
"Tr\u1ea3 L\u1ea1i Em Y\u00eau","Kh\u00f4ng Bao Gi\u1edd Qu\u00ean Anh","T\u00e0u V\u1ec1 Qu\u00ea H\u01b0\u01a1ng","\u0110\u00eam T\u00e2m S\u1ef1","Th\u01b0\u01a1ng Ho\u00e0i Ng\u00e0n N\u0103m",
"S\u01b0\u01a1ng L\u1ea1nh Chi\u1ec1u \u0110\u00f4ng","T\u00ecnh Ngh\u00e8o","Anh Cho Em M\u00f9a Xu\u00e2n","Hoa N\u1edf V\u1ec1 \u0110\u00eam","\u0110\u00f4i M\u1eaft Ng\u01b0\u1eddi X\u01b0a",
"Chuy\u1ec7n Ba Ng\u01b0\u1eddi","M\u01b0a Tr\u00ean Ph\u1ed1 Hu\u1ebf","N\u1ed7i Bu\u1ed3n Ch\u00e2u Pha","Ti\u1ec5n Em","Qu\u00ea H\u01b0\u01a1ng B\u1ecf L\u1ea1i",
"T\u00ecnh Nh\u01b0 M\u00e2y Kh\u00f3i","B\u00e0i Kh\u00f4ng T\u00ean S\u1ed1 2","B\u00e0i Kh\u00f4ng T\u00ean S\u1ed1 4","B\u00e0i Kh\u00f4ng T\u00ean S\u1ed1 7","Linh H\u1ed3n T\u01b0\u1ee3ng \u0110\u00e1",
"Ng\u1eadm Ng\u00f9i","Y\u00eau","Em Hi\u1ec1n Nh\u01b0 Su\u1ed1i L\u1ea1","Tu\u1ed5i Xa Ng\u01b0\u1eddi","C\u00f4 L\u00e1ng Gi\u1ec1ng",
"T\u00f3c Mai S\u1ee3i V\u1eafn S\u1ee3i D\u00e0i","Chuy\u1ec7n Ch\u00fang M\u00ecnh","\u0110\u00eam \u0110\u00f4ng N\u0103m \u1ea4y","L\u1ec7 \u0110\u1eafng","T\u00ecnh Y\u00eau \u0110\u1ebfn Trong Gi\u00e3 T\u1eeb",
"Ru Em T\u1eebng Ng\u00f3n Xu\u00e2n N\u1ed3ng","Ca Dao M\u1eb9","T\u00ecnh Ca Ng\u01b0\u1eddi M\u1ea5t Tr\u00ed","M\u00f9a \u0110\u00f4ng N\u0103m \u1ea4y","H\u1ebft R\u1ed3i C\u00f2n \u0110\u00e2u"
);
const CHANTS=[
"Bi\u1ec3n T\u00ecnh \u00b7 s\u00f3ng nh\u1edb d\u00e0i!","Ni\u1ec7m kh\u00fac \u00b7 kh\u00e9p l\u1ea1i r\u1ed3i!","Ph\u00fat cu\u1ed1i \u00b7 ngh\u1eb9n ng\u00e0o tr\u00f4i!","T\u00ecnh \u0111\u1eddi \u00b7 \u0111\u1eafng r\u1ed3i cay!","\u0110\u00eam \u0111\u00f4ng \u00b7 l\u1ea1nh bu\u1ed1t tay!",
"S\u1ea7u \u0111\u00f4ng \u00b7 gi\u00e1 bu\u1ed1t d\u00e0i!","L\u1ec7 \u0111\u00e1 \u00b7 nh\u1ecf gi\u1ecdt d\u00e0i!","Hoa ph\u01b0\u1ee3ng \u00b7 bu\u1ed3n r\u01a1i \u0111\u1ea7y!","T\u00e0u \u0111\u00eam \u00b7 c\u0169 k\u1ef9 tr\u00f4i!","\u0110\u1eafp m\u1ed9 \u00b7 t\u00ecnh \u0111\u00e3 r\u1ed3i!",
"Ngo\u00e0i ph\u1ed1 \u00b7 b\u00f3ng ai d\u00e0i!","Th\u00e0nh ph\u1ed1 \u00b7 bu\u1ed3n m\u00eanh mang!","M\u01b0a n\u1eeda \u0111\u00eam \u00b7 nh\u1ecf d\u00e0i!","L\u00e1 me \u00b7 bay xa r\u1ed3i!","Chi\u1ec1u t\u00edm \u00b7 nh\u1edb ai \u0111\u00e2y!",
"Gi\u1ecdt l\u1ec7 \u00b7 \u0111\u00e0i trang r\u01a1i!","\u0110\u01b0\u1eddng x\u01b0a \u00b7 em \u0111\u00e3 \u0111i!","M\u1ed9t m\u00ecnh \u00b7 l\u1eb7ng l\u1ebd th\u00f4i!","Duy\u00ean ph\u1eadn \u00b7 \u0111\u00e3 an b\u00e0i!","\u0110\u1ed3i sim \u00b7 t\u00edm ng\u00fat ng\u00e0n!",
"B\u1ea1c tr\u1eafng \u00b7 l\u1eeda h\u1ed3ng soi!","M\u00e1i t\u00f3c \u00b7 th\u01b0\u01a1ng ai r\u1ed3i!","Thi\u00ean duy\u00ean \u00b7 ti\u1ec1n \u0111\u1ecbnh r\u1ed3i!","\u0110\u00eam bu\u1ed3n \u00b7 t\u1ec9nh l\u1ebb d\u00e0i!","\u00c1o anh \u00b7 s\u1ee9t ch\u1ec9 r\u1ed3i!",
"T\u00ecnh l\u1ee1 \u00b7 \u0111\u00e0nh bu\u00f4ng tay!","Nh\u00e0 ngo\u1ea1i \u00f4 \u00b7 nh\u1edb d\u00e0i!","L\u01b0u b\u00fat \u00b7 ng\u00e0y xanh phai!","\u0110\u1eebng n\u00f3i \u00b7 xa nhau \u0111\u00e2y!","N\u1eeda \u0111\u00eam \u00b7 ngo\u00e0i ph\u1ed1 d\u00e0i!",
"G\u1ecdi t\u00ean \u00b7 nhau m\u1ed9t l\u1ea7n!","T\u00ecnh y\u00eau \u00b7 \u0111i qua r\u1ed3i!","M\u00f9a \u0111\u00f4ng \u00b7 c\u1ee7a anh \u0111\u00e2y!","Hoa trinh n\u1eef \u00b7 n\u1edf r\u1ed3i!","Bu\u1ed3n \u01a1i \u00b7 sao d\u00e0i th\u1ebf!",
"R\u1eebng x\u01b0a \u00b7 \u0111\u00e3 kh\u00e9p r\u1ed3i!","Bi\u1ec3n nh\u1edb \u00b7 s\u00f3ng c\u00f2n v\u01a1i!","Di\u1ec5m x\u01b0a \u00b7 \u0111\u00e3 phai r\u1ed3i!","C\u00f2n ch\u00fat g\u00ec \u00b7 \u0111\u1ec3 nh\u1edb!","H\u1eb9n h\u00f2 \u00b7 r\u1ed3i l\u1ea1i th\u00f4i!",
"M\u01b0a h\u1ed3ng \u00b7 \u01b0\u1edbt vai ai!","Tu\u1ed5i \u0111\u00e1 \u00b7 bu\u1ed3n kh\u00f4ng phai!","C\u00e1nh v\u1ea1c \u00b7 bay xa r\u1ed3i!","C\u1ecf non \u00b7 em b\u01b0\u1edbc d\u00e0i!","Th\u00e1ng s\u00e1u \u00b7 t\u00ecnh kh\u00fac n\u00e0y!",
"M\u00f9a thu \u00b7 d\u00e0nh cho ai!","Ru ta \u00b7 ng\u1eadm ng\u00f9i th\u00f4i!","Hai \u0111\u1ea7u \u00b7 n\u1ed7i nh\u1edb d\u00e0i!","\u0110\u00eam m\u01b0a \u00b7 nghe t\u1eebng h\u1ed3i!","T\u00ecnh s\u1ea7u \u00b7 ch\u1ea5t ch\u1ee9a \u0111\u1ea7y!",
];
CHANTS.push(
"Kh\u00fac Th\u1ee5y Du \u00b7 ng\u00e2n d\u00e0i!","M\u1ed9t c\u00f5i \u00b7 \u0111i v\u1ec1 th\u00f4i!","L\u1eddi chia tay \u00b7 kh\u1ebd th\u00f4i!","H\u1ea1 tr\u1eafng \u00b7 n\u1eafng c\u00f2n v\u01a1i!","Tu\u1ed5i ng\u1ecdc \u00b7 s\u00e1ng trong tay!",
"M\u1ed9t m\u00ecnh \u00b7 qua ph\u1ed1 d\u00e0i!","G\u1ecdi t\u00ean \u00b7 b\u1ed1n m\u00f9a th\u00f4i!","Nh\u1edb m\u00f9a xu\u00e2n \u00b7 c\u00f2n \u0111\u00e2y!","Ng\u01b0\u1eddi t\u00ecnh \u00b7 kh\u00f4ng \u0111\u1ebfn r\u1ed3i!","C\u00f4 \u0111\u01a1n \u00b7 ng\u1ed3i m\u1ed9t m\u00ecnh!",
"Tr\u1ea3 l\u1ea1i \u00b7 tr\u0103ng v\u1edbi sao!","Anh c\u00f2n n\u1ee3 \u00b7 em \u0111\u00e2y!","S\u1ea7u l\u1ebb b\u00f3ng \u00b7 d\u00e0i th\u00f4i!","\u0110\u00eam cu\u1ed1i \u00b7 kh\u00e9p l\u1ea1i r\u1ed3i!","Ng\u01b0\u1eddi y\u00eau kh\u00f3c \u00b7 th\u01b0\u01a1ng \u01a1i!",
"Tr\u1ea3 l\u1ea1i \u00b7 em y\u00eau th\u00f4i!","Kh\u00f4ng qu\u00ean \u00b7 anh su\u1ed1t \u0111\u1eddi!","T\u00e0u v\u1ec1 \u00b7 qu\u00ea h\u01b0\u01a1ng \u01a1i!","\u0110\u00eam t\u00e2m s\u1ef1 \u00b7 th\u00ec th\u1ea7m!","Th\u01b0\u01a1ng ho\u00e0i \u00b7 ng\u00e0n n\u0103m d\u00e0i!",
"S\u01b0\u01a1ng l\u1ea1nh \u00b7 chi\u1ec1u \u0111\u00f4ng n\u00e0y!","T\u00ecnh ngh\u00e8o \u00b7 v\u1eabn m\u1eb7n n\u1ed3ng!","Anh cho em \u00b7 m\u00f9a xu\u00e2n!","Hoa n\u1edf \u00b7 v\u1ec1 \u0111\u00eam th\u00f4i!","\u0110\u00f4i m\u1eaft \u00b7 ng\u01b0\u1eddi x\u01b0a \u01a1i!",
"Chuy\u1ec7n ba ng\u01b0\u1eddi \u00b7 r\u1ed1i b\u1eddi!","M\u01b0a Hu\u1ebf \u00b7 ph\u1ed1 c\u0169 d\u00e0i!","Bu\u1ed3n Ch\u00e2u Pha \u00b7 v\u1eabn v\u01b0\u01a1ng!","Ti\u1ec5n em \u00b7 m\u1ed9t b\u01b0\u1edbc d\u00e0i!","Qu\u00ea h\u01b0\u01a1ng \u00b7 b\u1ecf l\u1ea1i r\u1ed3i!",
"T\u00ecnh m\u00e2y kh\u00f3i \u00b7 m\u1ecfng manh!","B\u00e0i kh\u00f4ng t\u00ean \u00b7 s\u1ed1 hai!","B\u00e0i kh\u00f4ng t\u00ean \u00b7 s\u1ed1 b\u1ed1n!","B\u00e0i kh\u00f4ng t\u00ean \u00b7 s\u1ed1 b\u1ea3y!","Linh h\u1ed3n \u00b7 t\u01b0\u1ee3ng \u0111\u00e1 r\u1ed3i!",
"Ng\u1eadm ng\u00f9i \u00b7 nu\u1ed1t l\u1ec7 th\u00f4i!","Y\u00eau \u01a1i \u00b7 sao \u0111\u1eafng cay!","Em hi\u1ec1n \u00b7 nh\u01b0 su\u1ed1i n\u00e0y!","Tu\u1ed5i xa \u00b7 ng\u01b0\u1eddi c\u1ee9 phai!","C\u00f4 l\u00e1ng gi\u1ec1ng \u00b7 nh\u1edb d\u00e0i!",
"T\u00f3c mai \u00b7 s\u1ee3i ng\u1eafn d\u00e0i!","Chuy\u1ec7n ch\u00fang m\u00ecnh \u00b7 c\u0169 r\u1ed3i!","\u0110\u00eam \u0111\u00f4ng \u00b7 n\u0103m \u1ea5y \u01a1i!","L\u1ec7 \u0111\u1eafng \u00b7 nu\u1ed1t ngh\u1eb9n ng\u00e0o!","T\u00ecnh \u0111\u1ebfn \u00b7 trong gi\u00e3 t\u1eeb!",
"Ru em \u00b7 t\u1eebng ng\u00f3n tay!","Ca dao m\u1eb9 \u00b7 ru d\u00e0i!","T\u00ecnh ca \u00b7 ng\u01b0\u1eddi m\u1ea5t tr\u00ed!","M\u00f9a \u0111\u00f4ng \u00b7 n\u0103m \u1ea5y r\u1ed3i!","H\u1ebft r\u1ed3i \u00b7 c\u00f2n \u0111\u00e2u n\u1eefa!"
);
const CLOSERS=[
"G\u1ecdi bi\u1ec3n nh\u1edb. T\u00ecnh","Kh\u00e9p kh\u00fac cu\u1ed1i. V\u1ec1 m\u1ed9t","Ph\u00fat cu\u1ed1i ngh\u1eb9n. L\u00f2ng c\u00e0ng","T\u00ecnh \u0111\u1eddi \u0111\u1eafng. Qua t\u1eebng","\u0110\u00eam \u0111\u00f4ng l\u1ea1nh. Gi\u1eef nh\u1ecbp",
"S\u1ea7u \u0111\u00f4ng gi\u00e1. L\u1ec7 \u1ee9a","L\u1ec7 \u0111\u00e1 r\u01a1i. Ai c\u00f2n","Hoa ph\u01b0\u1ee3ng bu\u1ed3n. L\u00f2ng c\u00f2n","T\u00e0u \u0111\u00eam c\u0169. Nh\u1edb n\u00ean","\u0110\u1eafp m\u1ed9 t\u00ecnh. Kh\u00e9p m\u1ed9t",
"Ngo\u00e0i ph\u1ed1 v\u1eafng. B\u00f3ng c\u00f2n","Th\u00e0nh ph\u1ed1 bu\u1ed3n. V\u1ec1 m\u1ed9t","M\u01b0a n\u1eeda \u0111\u00eam. Nh\u1edb c\u00e0ng","L\u00e1 me bay. Qua t\u1eebng","Chi\u1ec1u t\u00edm nh\u1edb. Bu\u00f4ng nh\u1eb9",
"Gi\u1ecdt l\u1ec7 r\u01a1i. L\u00f2ng v\u1eeba","\u0110\u01b0\u1eddng x\u01b0a \u1ea5y. B\u01b0\u1edbc c\u00f2n","M\u1ed9t m\u00ecnh l\u1eb7ng. Gi\u1eef cho","Duy\u00ean ph\u1eadn \u0111\u1ecbnh. N\u00ean th\u00e0nh","\u0110\u1ed3i sim t\u00edm. Th\u01b0\u01a1ng m\u1ed9t",
"B\u1ea1c tr\u1eafng l\u1eeda. T\u00ecnh ch\u1eb3ng","M\u00e1i t\u00f3c th\u01b0\u01a1ng. Nh\u1edb v\u1ec1","Thi\u00ean duy\u00ean \u0111\u1ecbnh. T\u00ecnh c\u00e0ng","\u0110\u00eam t\u1ec9nh l\u1ebb. Qua t\u1eebng","\u00c1o s\u1ee9t ch\u1ec9. Ch\u1ec9 c\u00f2n",
"T\u00ecnh \u0111\u00e3 l\u1ee1. L\u00f2ng nh\u01b0","Nh\u00e0 ngo\u1ea1i \u00f4. Ai c\u00f2n","L\u01b0u b\u00fat xanh. M\u00e0u \u0111\u00e3","\u0110\u1eebng n\u00f3i xa. L\u00f2ng c\u00f2n","N\u1eeda \u0111\u00eam ph\u1ed1. Nh\u1edb m\u1ed9t",
"G\u1ecdi t\u00ean nhau. Th\u01b0\u01a1ng ch\u1eb3ng","T\u00ecnh \u0111i qua. V\u1ec1 m\u1ed9t","M\u00f9a \u0111\u00f4ng anh. Nh\u1edb c\u00e0ng","Hoa trinh n\u1eef. N\u1edf t\u1eebng","Bu\u1ed3n sao d\u00e0i. Gi\u1eef t\u1eeb",
"R\u1eebng x\u01b0a kh\u00e9p. C\u1eeda v\u1eeba","Bi\u1ec3n c\u00f2n nh\u1edb. Ai c\u00f2n","Di\u1ec5m x\u01b0a phai. L\u00f2ng c\u00f2n","C\u00f2n ch\u00fat nh\u1edb. N\u00ean th\u00e0nh","H\u1eb9n r\u1ed3i th\u00f4i. Kh\u00e9p m\u1ed9t",
"M\u01b0a h\u1ed3ng \u01b0\u1edbt. T\u00ecnh c\u00f2n","Tu\u1ed5i \u0111\u00e1 bu\u1ed3n. V\u1ec1 m\u1ed9t","C\u00e1nh v\u1ea1c bay. Xa c\u00e0ng","C\u1ecf non b\u01b0\u1edbc. Qua t\u1eebng","Th\u00e1ng s\u00e1u kh\u00fac. Nh\u1ecbp t\u1eeb",
"M\u00f9a thu em. L\u00f2ng v\u1eeba","Ru ta ng\u00f9i. Ai c\u00f2n","Hai \u0111\u1ea7u nh\u1edb. L\u00f2ng c\u00f2n","\u0110\u00eam nghe m\u01b0a. N\u00ean th\u00e0nh","T\u00ecnh s\u1ea7u \u0111\u1ecdng. Kh\u00e9p m\u1ed9t",
];
CLOSERS.push(
"Kh\u00fac Th\u1ee5y Du. \u00c2m d\u1ea7n","M\u1ed9t c\u00f5i v\u1ec1. V\u1ec1 m\u1ed9t","L\u1eddi chia tay. Bu\u00f4ng c\u00e0ng","H\u1ea1 tr\u1eafng n\u1eafng. Qua t\u1eebng","Tu\u1ed5i ng\u1ecdc s\u00e1ng. Gi\u1eef t\u1eeb",
"Qua ph\u1ed1 chi\u1ec1u. B\u01b0\u1edbc v\u1eeba","G\u1ecdi b\u1ed1n m\u00f9a. Ai c\u00f2n","Nh\u1edb m\u00f9a xu\u00e2n. L\u00f2ng c\u00f2n","Ng\u01b0\u1eddi kh\u00f4ng \u0111\u1ebfn. N\u00ean th\u00e0nh","C\u00f4 \u0111\u01a1n ng\u1ed3i. Kh\u00e9p m\u1ed9t",
"Tr\u1ea3 tr\u0103ng sao. T\u00ecnh ch\u1eb3ng","Anh c\u00f2n n\u1ee3. V\u1ec1 m\u1ed9t","S\u1ea7u l\u1ebb b\u00f3ng. Nh\u1edb c\u00e0ng","\u0110\u00eam cu\u1ed1i kh\u00e9p. Qua t\u1eebng","Ng\u01b0\u1eddi y\u00eau kh\u00f3c. L\u1ec7 t\u1eeb",
"Tr\u1ea3 l\u1ea1i em. L\u00f2ng v\u1eeba","Kh\u00f4ng qu\u00ean anh. Ai c\u00f2n","T\u00e0u v\u1ec1 qu\u00ea. L\u00f2ng c\u00f2n","\u0110\u00eam t\u00e2m s\u1ef1. N\u00ean th\u00e0nh","Th\u01b0\u01a1ng ng\u00e0n n\u0103m. Kh\u00e9p m\u1ed9t",
"S\u01b0\u01a1ng chi\u1ec1u \u0111\u00f4ng. T\u00ecnh ch\u1eb3ng","T\u00ecnh ngh\u00e8o m\u1eb7n. V\u1ec1 m\u1ed9t","Cho em xu\u00e2n. T\u00ecnh c\u00e0ng","Hoa n\u1edf \u0111\u00eam. Qua t\u1eebng","M\u1eaft ng\u01b0\u1eddi x\u01b0a. Nh\u00ecn t\u1eeb",
"Chuy\u1ec7n ba ng\u01b0\u1eddi. R\u1ed1i v\u1eeba","M\u01b0a ph\u1ed1 Hu\u1ebf. Ai c\u00f2n","Bu\u1ed3n Ch\u00e2u Pha. L\u00f2ng c\u00f2n","Ti\u1ec5n em \u0111i. N\u00ean th\u00e0nh","Qu\u00ea b\u1ecf l\u1ea1i. Kh\u00e9p m\u1ed9t",
"T\u00ecnh m\u00e2y kh\u00f3i. Mong c\u00f2n","Kh\u00f4ng t\u00ean hai. V\u1ec1 m\u1ed9t","Kh\u00f4ng t\u00ean b\u1ed1n. Nh\u1edb c\u00e0ng","Kh\u00f4ng t\u00ean b\u1ea3y. Qua t\u1eebng","Linh h\u1ed3n \u0111\u00e1. Gi\u1eef t\u1eeb",
"Ng\u1eadm ng\u00f9i nu\u1ed1t. L\u1ec7 v\u1eeba","Y\u00eau \u0111\u1eafng cay. Ai c\u00f2n","Em hi\u1ec1n su\u1ed1i. L\u00f2ng c\u00f2n","Tu\u1ed5i xa ng\u01b0\u1eddi. N\u00ean th\u00e0nh","C\u00f4 l\u00e1ng gi\u1ec1ng. Nh\u1edb m\u1ed9t",
"T\u00f3c mai d\u00e0i. S\u1ee3i c\u00f2n","Chuy\u1ec7n ch\u00fang m\u00ecnh. V\u1ec1 m\u1ed9t","\u0110\u00eam \u0111\u00f4ng \u1ea5y. Nh\u1edb c\u00e0ng","L\u1ec7 \u0111\u1eafng ngh\u1eb9n. Qua t\u1eebng","T\u00ecnh gi\u00e3 t\u1eeb. Bu\u00f4ng t\u1eeb",
"Ru em ng\u00f3n. Nh\u1ecbp v\u1eeba","Ca dao m\u1eb9. Ai c\u00f2n","T\u00ecnh ca tr\u00ed. L\u00f2ng c\u00f2n","M\u00f9a \u0111\u00f4ng \u1ea5y. N\u00ean th\u00e0nh","H\u1ebft r\u1ed3i c\u00f2n \u0111\u00e2u. Kh\u00f3 v\u00ec l\u00f2ng"
);
const RHYMES=["ng\u00e0y","nh\u00e0","l\u1edbn","n\u0103m","s\u00e1u","n\u1ea3y","d\u00e1m","tin","ng\u01b0\u1eddi","t\u1ed1t","d\u00e0i","nh\u00e0","l\u1edbn","n\u0103m","th\u00e1o","n\u1ea3y","d\u00e1m","k\u00edn","ng\u01b0\u1eddi","m\u1ed1t","sai","nh\u00e0","l\u1edbn","n\u0103m","s\u00e1u","ch\u00e1y","d\u00e1m","tin","ng\u01b0\u1eddi","m\u1ed9t","t\u1edbi","nh\u00e0","l\u1edbn","n\u0103m","s\u00e1u","b\u1ea3y","d\u00e1m","tin","ng\u01b0\u1eddi","t\u1ed1t","d\u00e0i","nh\u00e0","l\u1edbn","n\u0103m","s\u00e1u","b\u1ea3y","d\u00e1m","tin","ng\u01b0\u1eddi","\u0111\u1ed9t","phai","nh\u00e0","l\u1edbn","n\u0103m","s\u00e1u","b\u1ea3y","d\u00e1m","tin","ng\u01b0\u1eddi","\u1ed1t","phai","nh\u00e0","l\u1edbn","n\u0103m","s\u00e1u","b\u1ea3y","d\u00e1m","tin","ng\u01b0\u1eddi","\u1ed1t","phai","nh\u00e0","l\u1edbn","n\u0103m","s\u00e1u","b\u1ea3y","d\u00e1m","tin","ng\u01b0\u1eddi","\u1ed1t","d\u00e0i","nh\u00e0","l\u1edbn","n\u0103m","s\u00e1u","b\u1ea3y","d\u00e1m","tin","ng\u01b0\u1eddi","\u1ed1t","d\u00e0i","nh\u00e0","l\u1edbn","n\u0103m","s\u00e1u","b\u1ea3y","d\u00e1m","tin","ng\u01b0\u1eddi","ng\u1ea1i"];
const cards=[];
for(let i=0;i<100;i++){
  const n=i+1;
  cards.push({n,nvi:nvi(n),title:TITLES[i],chant:CHANTS[i],closer:CLOSERS[i],rhyme:RHYMES[i],next:n<100?nvi(n+1):""});
}
function esc(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");}
const css=`@page{size:Letter;margin:0.35in}*{box-sizing:border-box}body{margin:0;font-family:"DejaVu Sans",Arial,sans-serif;color:#141414}
.cover{page-break-after:always;height:10.3in;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center}
.cover h1{color:#5A1428;font-size:28px;margin:0 0 8px}.cover h2{font-size:20px;margin:0 0 18px}
.cover p{font-size:13px;line-height:1.5;max-width:420px;color:#333}.cover .note{color:#666;font-size:11px;margin-top:24px}
.page{page-break-after:always;width:100%}.grid{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;gap:10px;height:10.2in}
.card{border:1.2px solid #1e1e1e;padding:10px 12px 8px;display:flex;flex-direction:column}
.top{display:flex;align-items:flex-start;gap:10px}
.badge{width:42px;height:42px;background:#5A1428;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:15px;flex-shrink:0}
.call{font-weight:700;font-size:20px;line-height:1.1}.meta{font-size:10px;color:#777;margin-top:2px}
.title{color:#5A1428;font-weight:700;font-size:13px;margin:10px 0 6px}.chant{font-size:12.5px;line-height:1.35;margin-bottom:8px}
.closer{font-size:12px;color:#333}.rhyme{color:#b41e1e;font-weight:700;font-size:14px}
.strip{margin-top:auto;background:#f5f5f5;padding:7px 8px;font-size:11px;color:#505050;display:flex;justify-content:space-between}
.strip strong{color:#141414}`;
let html="<!doctype html><html><head><meta charset=utf-8><title>Bolero Cards</title><style>"+css+"</style></head><body>";
html+="<section class=cover><h1>BOLERO \u00b7 NH\u1ea0C V\u00c0NG</h1><h2>L\u00f4 t\u00f4 Call Cards</h2>";
html+="<p>100 th\u1ebb g\u1ecdi s\u1ed1<br>S\u1ed1 l\u1edbn \u2192 \u0111\u1ecdc nh\u1ecbp theo t\u1ef1a b\u00e0i (\u00b7)<br>Ch\u1eef \u0111\u1ecf cu\u1ed1i c\u00e2u = v\u1ea7n v\u00e0o s\u1ed1 k\u1ebf ti\u1ebfp<br>In 2\u00d72 / trang \u00b7 c\u1eaft theo khung</p>";
html+="<p class=note>Ch\u1ec9 d\u00f9ng <b>t\u1ef1a b\u00e0i</b> ph\u1ed5 bi\u1ebfn \u00b7 c\u00e2u g\u1ecdi l\u00e0 s\u00e1ng t\u00e1c g\u1ed1c cho l\u00f4 t\u00f4 \u00b7 <b>kh\u00f4ng c\u00f3 l\u1eddi b\u00e0i h\u00e1t</b><br>C\u00e1ch g\u1ecdi: hit s\u1ed1 to \u00b7 th\u1ea3 nh\u1ecbp \u00b7 nh\u1ea5n ch\u1eef \u0111\u1ecf \u00b7 l\u0103n sang s\u1ed1 sau</p></section>";
for(let i=0;i<cards.length;i+=4){
  html+="<section class=page><div class=grid>";
  for(let j=0;j<4;j++){
    const c=cards[i+j];
    if(!c){html+="<div></div>";continue;}
    html+="<div class=card><div class=top><div class=badge>"+c.n+"</div><div><div class=call>"+esc(c.nvi)+"!</div><div class=meta>L\u00d4 T\u00d4 CALL \u00b7 \u00b7 = nh\u1ecbp</div></div></div>";
    html+="<div class=title>"+esc(c.title)+"</div><div class=chant>"+esc(c.chant)+"</div>";
    html+="<div class=closer>"+esc(c.closer)+" <span class=rhyme>"+esc(c.rhyme)+"</span>.</div><div class=strip>";
    if(c.next) html+="<span>v\u1ea7n v\u00e0o \u2192 "+esc(c.next)+"!</span><strong>"+esc(c.next)+"!</strong>";
    else html+="<span style=\"width:100%;text-align:center;font-weight:700\">H\u1ebeT B\u00c0N \u00b7 \u0111\u00f3ng nh\u1ecbp</span>";
    html+="</div></div>";
  }
  html+="</div></section>";
}
html+="</body></html>";
const out="/workspace/deck/bolero-lotto-cards.html";
fs.writeFileSync(out,html);
fs.writeFileSync("/workspace/deck/bolero_cards.json",JSON.stringify(cards,null,2));
console.log("wrote",out,html.length,"cards",cards.length);
