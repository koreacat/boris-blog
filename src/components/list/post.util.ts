/*
 * TODO 7.
 * [렌더링 최적화 - 병목 코드 최적화]
 * 많은 연산으로 병목을 일으키는 코드입니다.
 * 필요 이상의 모든 텍스트에 대해 계산하고 있습니다.
 * 파라미터로 넘어온 문자열에서 일부 특수문자를 제거하는 함수
 * */
export const removeSpecialCharacter = (str: string) => {
  const removeCharacters = [
    "#",
    "_",
    "*",
    "~",
    "&",
    ";",
    "!",
    "[",
    "]",
    "`",
    ">",
    "\n",
    "=",
    "-",
  ];
  let _str = str;
  let i = 0,
    j = 0;

  for (i = 0; i < removeCharacters.length; i++) {
    j = 0;
    while (j < _str.length) {
      if (_str[j] === removeCharacters[i]) {
        _str = _str.substring(0, j).concat(_str.substring(j + 1));
        continue;
      }
      j++;
    }
  }

  return _str;
};

export const substringWithZeroPad = (value: string | number, len: number) => {
  const str = "0000000000" + value.toString();
  return str.substring(str.length - len);
};

export const getDateTime = (_createdTime: string) => {
  const createdTime = new Date(_createdTime);
  return `${createdTime.getFullYear()}.${substringWithZeroPad(
    createdTime.getMonth() + 1,
    2
  )}.${substringWithZeroPad(createdTime.getDate(), 2)}`;
};
