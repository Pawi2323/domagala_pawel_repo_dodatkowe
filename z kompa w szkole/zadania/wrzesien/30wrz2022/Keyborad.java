import java.util.Scanner;

public class Keyborad{
    Scanner sc = new Scanner(System.in);
    public int[] wczytanie(){
        int[] tab = new int[10];
        for(int i = 0; i < tab.length; i++){
            System.out.println("Poodaj liczbę numer "+(i+1)+":");
            tab[i] = sc.nextInt();
        }
        return tab;
    }
}