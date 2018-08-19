//init
var cards = Array(100);
var l=0;
while (l < cards.length ){
  cards[l] = Boolean(cards[l]);
  l = l+1;
}

//main
var i, j, m;
for(i=1; i < cards.length; i++){
  for (j=i; j < cards.length; j=j+i+1 ){
    cards[j] = !cards[j];
  }
}

for (m=0; m<cards.length; m++){
  if (!cards[m])
    console.log(m+1);
  }
}
