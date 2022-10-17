import java.math.BigDecimal;
import java.math.MathContext;
import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        Dzialanie d = new Dzialanie();
        System.out.println("Wybierz działanie: \n1 - dodawanie\n2 - odejmowanie\n3 - mnozenie\n4 - dzielenie\n5 - potegi\n6 - pierwiastki");
        Scanner sc = new Scanner(System.in);
        int wybor = sc.nextInt();
        System.out.println("Podaj 1 liczbe: ");
        BigDecimal a = new BigDecimal(sc.nextInt());
        System.out.println("Podaj 2 liczbe: ");
        BigDecimal b = new BigDecimal(sc.nextInt());
        BigDecimal wynik;
        switch (wybor){
            case 1: {
                wynik = (d.dodawanie(a, b));
                System.out.println(wynik);
                break;
            }
                
            case 2: {
                wynik = (d.odejmownie(a, b));
                System.out.println(wynik);
                break;
            }

            case 3: {
                wynik = (d.mnozenie(a, b));
                System.out.println(wynik);
                break;
            }

            case 4: {
                wynik = (d.dzielenie(a, b));
                System.out.println(wynik);
                break;
            }

            case 5: {
                wynik = (d.potegowanie(a, b));
                System.out.println(wynik);
                break;
            }

            case 6: {
                MathContext mc = new MathContext(b.intValue());
                wynik = (d.pierwiastkowanie(a, mc));
                System.out.println(wynik);
                break;
            }
        }
    }
}