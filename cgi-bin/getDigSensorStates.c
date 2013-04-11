int main()
{
  int i;

  for (i=8; i < 16; i++){
    if(i < 10) {
      printf("<strong>%d</strong>  %d", i, digital(i));
      printf("<br />");
    }
    else {
      printf("<strong>%d</strong> %d", i, digital(i));
      printf("<br />");
    }
  }
  return 0;
}
