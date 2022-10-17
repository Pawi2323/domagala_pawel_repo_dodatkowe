public class Przypomnienie {
    public static void main(String[] args){
        Dzialanie d = new Dzialanie();
        d.pozdrowenie("Adam");

        Osoba os1 = new Osoba("Adam", 90);
        d.pozdrowenie(os1.getImie());
    }
}