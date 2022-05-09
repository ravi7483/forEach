var cl = console.log;
cl('app.js file attach');
var info =document.getElementById('info')
// HOF ==> higher order function ==> a function  which accept another function as parameter or arrgument 

// callback function ==> a function which is passed as parameter or argument

// bydefalut higher order function is 'forEach'

var ages = [20,30,40,50,60,85,70,78,90,45,67,89];
// my age is

// -----------------------------for ---------------------------------------------------------------------------------- 
for(var i=0; i<ages.length; i++){
    cl(`${i + 1} my age is ${ages[i]}`);
}

// ----------------------forin ------------------------------------------------------------------------------------------

for(var key in ages){
    cl(`my ageis ${ages[key]}`)
}

// ------------------------------------forEach-------------------------------------------------------------------------

ages.forEach(function(age){
    cl(`my age is ${age}`)
})

ages.forEach(function(age,i){
    cl(`${i + 1} my age is  ${age}`)
})

// ----------------------forEach ------------------------------------------------------------------------------

// even num 

var number = [10,20,30,34,56,78,90,80,70,60,40,560,670,33,78,3,5,7,9,13];

// ---------------------------------- for -------------------------------------------------------------------

 /* for(var i=0; i<number.length; i++){
    if(i % 2 ==0){
    cl(`even num is ${number[i]}`)
} else{
    cl(`odd nm os ${[i]}`)
}
 } */

 number.forEach(function(numb){
     if(numb % 2===0){
         cl(numb);
     }
 })


number.forEach(function(num){
    if(num % 2 === 0){
        cl('even num ', num);
    }else if(num % 2 !==0){
        cl('odd num', num)
    }else{
        cl(num);
    }
}) 

var studentInfo = [
    {
        fname : 'tony',
        lname : 'stark',
        nickname : 'ironman',
        contact : 9876546789,
    },
    {
        fname : 'peter',
        lname : 'parkar',
        nickname : 'spiderman',
        contact : 8889043567,
    },
    {
        fname : 'brusse',
        lname : 'wyene',
        nickname : 'batman',
        contact : 9923456789,
    },
    {
        fname : 'jhone',
        lname : 'doe',
        nickname : 'xyz',
        contact : 9876546789,
    },

];

//for(var i=0; i<studentInfo.length; i++){
  //  cl(studentInfo[i])
// }

studentInfo.forEach(function(student){
    cl(student);
})

/* studentInfo.forEach(function(elment,i){
    if(i==0){
        cl(elment)
    }
   
}) */

var tableinfo =[
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
       geo: {
          lat: "-37.3159",
          lng: "81.1496"
        }
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
      }
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      address: {
        street: "Victor Plains",
        suite: "Suite 879",
        city: "Wisokyburgh",
        zipcode: "90566-7771",
       geo: {
          lat: "-43.9509",
          lng: "-34.4618"
        }
      },
      phone: "010-692-6593 x09125",
      website: "anastasia.net",
      company: {
        name: "Deckow-Crist",
        catchPhrase: "Proactive didactic contingency",
        bs: "synergize scalable supply-chains"
      }
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
      address: {
        street: "Douglas Extension",
        suite: "Suite 847",
        city: "McKenziehaven",
        zipcode: "59590-4157",
       geo: {
          lat: "-68.6102",
          lng: "-47.0653"
        }
      },
      phone: "1-463-123-4447",
      website: "ramiro.info",
      company: {
        name: "Romaguera-Jacobson",
        catchPhrase: "Face to face bifurcated interface",
        bs: "e-enable strategic applications"
      }
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConner@kory.org",
      address: {
        street: "Hoeger Mall",
        suite: "Apt. 692",
        city: "South Elvis",
        zipcode: "53919-4257",
       geo: {
          lat: "29.4572",
          lng: "-164.2990"
        }
      },
      phone: "493-170-9623 x156",
      website: "kale.biz",
      company: {
        name: "Robel-Corkery",
        catchPhrase: "Multi-tiered zero tolerance productivity",
        bs: "transition cutting-edge web services"
      }
    }]

    var result = '';
   /*  for(var i=0; i<tableinfo.length; i++){
        result +='<tr><td>'+tableinfo[i].id+'</td><td>'+tableinfo[i].name+'</td><td>'+tableinfo[i]. username+'</td><td>'+tableinfo[i].email+'</td> <td> street :  ' +tableinfo[i].address.street+', suite : '+ tableinfo[i].address. suite + ', city : ' +tableinfo[i].address. city+', zipcode : ' + tableinfo[i].address. zipcode+ ', geo lat : '+tableinfo[i].address. geo.lat+'</td> <td>'+tableinfo[i]. phone+'</td><td>'+tableinfo[i]. website+'</td><td>Name : '+tableinfo[i].company.name +', catchPhrase : '+ tableinfo[i].company.catchPhrase+ ', bs : '+ tableinfo[i].company.bs+'</td></tr>'
    } */
    tableinfo.forEach(function(table){
        result +=`<tr>
        <td>${table.id}</td>
        <td>${table.name}</td>
        <td>${table.username}</td>
        <td>${table.email}</td>
        <td>street : ${table.address.street},
        suite : ${table.address.suite}, city : ${table.address.city}, zipcode : ${table.address.zipcode}, geo lat : ${table.address.geo.lat},</td>
        <td>${table.phone}</td>
        <td>${table.website}</td>
        <td>Name : ${table.company.name}, catchphrase :  ${table.company.catchPhrase}, bs : ${table.company.bs}</td>
        </tr>`
    })
cl(result);
info.innerHTML =result;


/* var result ="<ul class='list-group'>";
for(var i=0; i<skills.length; i++){
    result +="<li class='list-group-item'>i love " + skills[i]  +"</li>"; 
}
result += "</ul>";
var skillSets = document.getElementById('skillSets');
skillSets.innerHTML = result;
cl(result);
 */
var skills = ['HTML', 'CSS3', 'JavaScript', 'Sass', 'Es6', 'Angular'];

var result =`<ul class='list-group'>`

skills.forEach(function(skill){
    result += `<li class='list-group-item'> i love ${skill}</li>`
})
result +=`</ul>`
document.getElementById('Skillsset').innerHTML = result;


var mobile = ["Redmi", "Carbon", "Sam", "oneplus", "Realme", "Vivo", "Sony", "ASUS","Infinix"];

var result = `<ul class='list-group'>`

mobile.forEach(function(mobiles){
    result +=`<li class='list-group-item'> MobName :  ${mobiles} </li>`
})
result += `</ul>`

document.getElementById('Mobilelist').innerHTML = result;



var subjectName = ['organic', 'physical','inorganic','industrial', 'basic sepectrocopy','quantum mechanices','inorganic spectrocopy','quantum specrocopy'];

 // var result ="<ul class='list-group'>"
/* for(var i=0; i<subjectName.length; i++){
   
    result +="<li class='list-group-item'>subject "+ subjectName[i] +"</li>"
}
result +="</ul>"
var  subject = document.getElementById('subject');
subject.innerHTML = result;
cl(result); */

var result =`<ul class='list-group'>`
subjectName.forEach(function(subject1){
	result +=`<li class='list-group-item'> sub :  ${subject1}</li>`	
})
result +=`</ul>`
document.getElementById('subjectN').innerHTML = result;



var StudentName =[
  {
      Srno : 90,
      SPECILIZATION :'PHYSICAL',
      NAME : 'PHULMOGARE VAISHNAVI',  
},
 { Srno : 91,
  SPECILIZATION :'ORGANIC',
  NAME : 'RACHALWAR SAIPRASAD',
},
{
  Srno : 92,
  SPECILIZATION :'ANALYTICAL',
  NAME : 'RAJWAD SHASHIKANT',
 
},
{
  Srno : 92,
  SPECILIZATION :'MEDICINAL',
  NAME : 'SABALE SUMIT',
},
{
  Srno : 94,
  SPECILIZATION :'INDUSTRIAL',
  NAME : 'SATPUTE VAISHNAVI',
}, 
{
  Srno : 95,
  SPECILIZATION :'PHYSICAL',
  NAME : 'SAWANT SANTOSH',
},
{
  Srno : 96,
  SPECILIZATION :'POLYMER',
  NAME : 'SHAIKH MANUJA SK KALAM',
},
{
  Srno : 97,
  SPECILIZATION :'POLYMER',
  NAME : 'SHAIKH SIMRAN JALAL',
},
{
  Srno : 98,
  SPECILIZATION :'PHYSICAL',
  NAME : 'SHINDE DATTATRATYA',
},
{
  Srno : 99,
  SPECILIZATION :'INDUSTRIAL',
  NAME : 'SHINDE RAJ',
},
{
  Srno : 100,
  SPECILIZATION :'ORGANIC',
  NAME : 'SHINDE VISHAL',
},
{
  Srno : 101,
  SPECILIZATION :'ORGANIC',
  NAME : 'SHUBHAM GHUGE',
},
{
  Srno : 102,
  SPECILIZATION :'PHYSICAL',
  NAME : 'SINGH NANDINI',
},
{
  Srno : 103,
  SPECILIZATION :'ORGANIC',
  NAME : 'SURYAWANSHI DIVYA',
},
{
  Srno : 104,
  SPECILIZATION :'INDUSTRIAL',
  NAME : 'SURYAWANSHI JAYKUMAR',
},
{
  Srno : 105,
  SPECILIZATION :'INDUSTRIAL',
  NAME : 'SWAMI NANDINI',
},
{
  Srno : 106,
  SPECILIZATION :'MEDICINAL',
  NAME : 'TADAME VAISHNAVI',
},
{
  Srno : 107,
  SPECILIZATION :'MEDICINAL',
  NAME : 'TOKALWAD MONIKA',
},
{
  Srno : 108,
  SPECILIZATION :'ANALYTICAL',
  NAME : 'UGHADE UMA',
},
{
  Srno : 109,
  SPECILIZATION :'PHYSICAL',
  NAME : 'URADE ABHAY', 
},
{
  Srno : 110,
      SPECILIZATION :'ANALYTICAL',
      NAME : 'VAIBHAV SOMWAD',
},
{
  Srno : 111,
  SPECILIZATION :'ORGANIC',
  NAME : 'VAIDYA MUNJA',
},
{
  Srno : 112,
  SPECILIZATION :'PHYSICAL',
  NAME : 'VAIDYA SHARDA',
},
{
  Srno : 113,
  SPECILIZATION :'MEDICINAL',
  NAME : 'VHANE CHAITANYA',
},
{
  Srno : 114,
  SPECILIZATION :'MEDICINAL',
  NAME : 'VISHAL RAJU',
},
{
  Srno : 115,
  SPECILIZATION :'ORGANIC',
  NAME : 'WAGHMARE KRISHNA',
},
{
  Srno : 116,
  SPECILIZATION :'INDUSTRIAL',
  NAME : 'WAGHMARE PRIYANKA',
},
{
  Srno : 117,
  SPECILIZATION :'MEDICINAL',
  NAME : 'WAGHMARE PTATIDNYA',
},

{
      Srno : 118,
      SPECILIZATION :'ANALYTICAL',
      NAME : 'YADHAV PRAVIN',
},
{
  Srno : 119,
  SPECILIZATION :'MEDICINAL',
  NAME : 'ZADE VAISHNAVI',
},
{
  Srno : 120,
  SPECILIZATION :'MEDICINAL',
  NAME : 'ZORE TEJASWINI',
},
]
/* var result = '';
for(var i=0; i <StudentName.length; i++ ){
  result +="<tr><td> "+(StudentName[i].Srno) + "</td><td>"+(StudentName[i].SPECILIZATION)+"</td><td>"+(StudentName[i].NAME)+"</td></tr>";
} */
//info1.innerHTML = result;
//cl(result);

var result ='';

StudentName.forEach(function(std){
      result +=`<tr>
                  <td> ${std.Srno}</td>
                  <td> ${std.SPECILIZATION}</td>
                  <td> ${std.NAME}</td>
                </tr>`
})


document.getElementById('info2').innerHTML = result;


let arr = [
    {
      albumId: 1,
      id: 1,
      p: "accusamus beatae ad facilis cum similique qui sunt",
      img: "https://via.placeholder.com/600/92c952",
      thumbnailUrl: "https://via.placeholder.com/150/92c952",
    },
    {
      albumId: 1,
      id: 2,
      p: "reprehenderit est deserunt velit ipsam",
      img: "https://via.placeholder.com/600/771796",
      thumbnailUrl: "https://via.placeholder.com/150/771796",
    },
    {
      albumId: 1,
      id: 3,
      p: "officia porro iure quia iusto qui ipsa ut modi",
      img: "https://via.placeholder.com/600/24f355",
      thumbnailUrl: "https://via.placeholder.com/150/24f355",
    },
  ];

  /* <div class="card"> 
  <div class="card-body">
      <figure>
               <img src="https://via.placeholder.com/600/92c952" alt="" class="img-fluid">
          <figcaption> 
                <p>accusamus beatae ad facilis cum similique qui sunt</p> 
               <span class="albumId">Album Id : 1</span> 
               <span class="id">Id : 1</span> 
          </figcaption> 
      </figure> 
  </div> 
</div> */
  /*  var result = '';
   for(var i=0; i<arr.length; i++){
      result +='<div class="card"><div class="card-body"><figure><img src="'+arr[i].img +'alt="" class="img-fluid"> <figcaption><p>'+arr[i].p+'</p><span class="albumId">Album Id : '+arr[i].albumId+'</span><span class="id">Id : '+arr[i].id+'</span></figcaption></figure></div></div>';
  }

   info.innerHTML =result;
  cl(result); */


  var result = '';
arr.forEach(function(card){
  result +=`<div class='col-sm-4'> <div class='card'>
              <div class='card-body'>
                  <figure>
                         <img src='${card.img}' alt='' class='img-fluid'>
                     <figcaption>
                       <p>
                         ${card.p}
                       </p>
                       <span class='albumId'>
                          Album Id : ${card.albumId} 
                       </span>

                       <span class="id"> Id : ${card.id}</span>
                     </figcaption>
                  </figure>
              </div>
            </div></div>`
})
document.getElementById('info3').innerHTML = result ;

