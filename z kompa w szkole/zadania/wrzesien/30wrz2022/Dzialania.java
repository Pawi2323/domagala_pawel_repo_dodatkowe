import java.util.Arrays;

public class Dzialania {
    public int rozstep(int[] liczby){
        int max = liczby[0];
        for (int i = 0; i < liczby.length; i++) {
            if (liczby[i] > max) {
                max = liczby[i];
            }
        }
        int min = liczby[0];
        for (int i = 0; i < liczby.length; i++) {
            if (liczby[i] < min) {
                min = liczby[i];
            }
        }

        return (max-min);
    }
    public void moda(int[] liczby){
        Arrays.sort(liczby);

        for(int i = 1; i < liczby.length; i++) {
            if(liczby[i] == liczby[i - 1]) {
            System.out.println("Duplikaty: " + liczby[i]);
            }
        }       
    }
    public void mediana(int[] liczby){
         
    }
    
    public double srednia(int[] liczby){
        int all = 0;
        for (int i = 0; i < liczby.length; i++) {
            all = all+liczby[i];
        }
        

        return (all/liczby.length);
    }

    public void odchylenie(int[] liczby){
         
    }

    public void najliczba(int[] liczby){
         
    }
    public void wyswliczb(int[] liczby){
         
    }
    
    
    
}
