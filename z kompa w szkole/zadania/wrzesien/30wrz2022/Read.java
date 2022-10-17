import java.io.File;
import java.util.Scanner;

public class Read {
    public int[] wczytywanie(){
        int[] tab = new int[1000];
        try {
            Scanner sc = new Scanner(new File("liczby.csv"));
            while(sc.hasNext()){
            for(int i = 0; i < tab.length; i++){
                tab[i] = sc.nextInt();
            }
                }
        } catch (Exception e) {
            // TODO: handle exception
        }
        return tab;
    }
}
