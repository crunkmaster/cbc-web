int main(int argc, char const *argv[])
{
	int sensorNumber = 8; 
	
	int i;	
	for (i = 0; i < sensorNumber; i++)
	{
		printf("<strong>%d</strong> %d", i, analog10(i));
		printf("<br />");
	}
	return 0;
	
}
