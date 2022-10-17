public class Osoba {
    private String imie;
    private int wiek;

    public Osoba(String imie, int wiek){
        this.imie = imie;
        this.wiek = wiek;
    }

    public String getImie(){
        return imie;
    }

    public int getWiek(){
        return wiek;
    }

    public void setImie(String imie){
        this.imie = imie;
    }

    public void setWiek(int wiek){
        this.wiek = wiek;
    }
}