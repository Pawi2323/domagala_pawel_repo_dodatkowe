import java.util.Scanner;

public class main {
    public static void main(String[] args){
        Losowe lo = new Losowe();
        Menu m = new Menu();
        Read r = new Read();
        Keyborad k = new Keyborad();
        Dzialania d = new Dzialania();
        m.menu_wybor();
        Scanner sc = new Scanner(System.in);
        int wybor = sc.nextInt();
        switch (wybor) {
            case 1:
                int[] tab_k = new int[10];
                tab_k = k.wczytanie();
                m.menu_dzialania();
                int wybor2 = sc.nextInt();
                switch (wybor2) {
                    case 1:
                        System.out.println("Rozstęp wynosi: "+d.rozstep(tab_k));
                        break;
                    case 2:
                        d.moda(tab_k);
                        break;
                    case 3:

                        break;
                    case 4:
                        System.out.println("Średnia arytmetyczna wynosi: "+d.srednia(tab_k));
                        break;
                    
                    default:
                        break;
                }
                

                break;
            case 2:
                int[] tab_w = new int[1000];
                tab_w = r.wczytywanie();
                break;

            case 3:
                int[] tab_l = new int[1000];
                tab_l = lo.losowanie();
                break;

            
        
            default:
                break;
        }
    }
}