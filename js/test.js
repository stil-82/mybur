
var strIn="Привет! Как дела?";
console.log("#1:");
console.log("1й способ: "+strIn.match(/[аеёиоуыэюя]/gi).join(""));
console.log("2й способ: "+strIn.toLowerCase().match(/[аеёиоуыэюя]/g).join(""));

console.log("#2:");
var users = [
    {
        name: "Алексей",
        salary: 500
    },
    {
        name: "Виктор",
        salary: 1300
    },
    {
        name: "Иван",
        salary: 1500
    }
];

function newArr(arrIn, maxSal) {
    retArr=[];
    for (i = 0; i < arrIn.length; i++) { 
      if (arrIn[i].salary>maxSal) 
        {
            retArr.push(arrIn[i].name);
        }
    };
    return retArr;
}

console.log(newArr(users,1000));

console.log("#3:");
function isHtml(filename) {
  try {

   return filename.match(/\.html$/).index>0;
   //можно и через substr и length вместо регулярного
   //todo обработка ошибок (если ошибка то false)
  }
  catch (err) {
    return false;//криво, я знаю )
   }
}

console.log(isHtml("/users/download/index.html"));

console.log("#4:");
function isOdd(value) {
    return value % 2==0
  }

var arrIn = [3,13,74,14,66,15,22,4];
console.log(arrIn);
arrOut=[];
for (i = 0; i < arrIn.length; i++) { 
    if (isOdd(arrIn[i])) 
      {
          arrOut.push(arrIn[i]);
      }
  };
 console.log(arrOut);
