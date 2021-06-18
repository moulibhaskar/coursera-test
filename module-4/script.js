var names = new Array();
names[0]="Yaakov";
names[1]="John";
names[2]="Jen";
names[3]="jason";
names[4]="paul";
names[5]="frank";
names[6]="larry";
names[7]="paula";
names[8]="laura";

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