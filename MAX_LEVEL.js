function CompareByScore(First,Second){
if(First[0]>Second[0])
return -1;
if(First[0]<Second[0])
return 1;
return 0;
} 

names=Object.keys(localStorage);
max_level_name_pair=[];// will used for mapping name and respected score 

for(i=0;i<names.length;i++){
list=[localStorage.getItem(names[i]),names[i]];    
max_level_name_pair.push(list);
}

max_level_name_pair.sort(CompareByScore);

for(i=0;i<max_level_name_pair.length;i++){
ol=document.getElementById("list");
li=document.createElement("li");
li.appendChild(document.createTextNode(max_level_name_pair[i][1]+" highest Score is "+max_level_name_pair[i][0]));
ol.appendChild(li);
}
