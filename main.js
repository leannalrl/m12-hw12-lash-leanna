let lunchlist = [{
    idLunch: 1,
    lunchName: 'Ham Sandwich'
  },
  {
    idLunch: 2,
    lunchName: 'Turkey Sandwich'
  },
  {
    idLunch: 3,
    lunchName: 'Apple Pie'
  },
   {
    idLunch: 4,
    lunchName: 'Pumpkin Pie'
  },
 {
    idLunch: 5,
    lunchName: 'Broccoli and Potato Casserol'
  },
 {
    idLunch: 6,
    lunchName: 'Stew'
  },
 {
    idLunch: 7,
    lunchName: 'Apple Pie'
  },

 {
    idLunch: 8,
    lunchName: 'Apple Pie'
  },
 {
    idLunch: 9,
    lunchName: 'Apple Pie'
  },
 {
    idLunch: 10,
    lunchName: 'Apple Pie'
  },
];

function GetLunch() {
  var random_num = Math.floor(Math.random() * lunchlist.length);
  var random =  lunchlist[random_num].lunchName + "<br>" + lunchlist[random_num].lunchLink;
  document.getElementById("message").innerHTML = random;
}
