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
	if(names[i].charAt()==='J'||names[i].charAt()==='j')
	{
		console.log("Goodbye " + names[i]);
	}
	else
	{
		console.log("Hello " + names[i]);
	}
}