import java.util.Random;

public class Losowe{
    public int[] losowanie(){
        Random rand = new Random();
        int[] tab = new int[1000];
        for(int i = 0; i < tab.length; i++){
            tab[i] = rand.nextInt(10000);
        }
        return tab;
    }
}