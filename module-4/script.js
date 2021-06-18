var names = new Array();
names[0]="india";
names[1]="japan";
names[2]="australia";
names[3]="england";
names[4]="USA";
names[5]="france";
names[6]="srilanka";
names[7]="nepal";
names[8]="world";

for(var i=0; i< names.length; i++)
{
	if(n[i].charAt()==='J'||n[i].charAt()==='j')
	{
		console.log("goodbye" + names[i]);
	}
	else
	{
		console.log("hello" + names[i]);
	}
}