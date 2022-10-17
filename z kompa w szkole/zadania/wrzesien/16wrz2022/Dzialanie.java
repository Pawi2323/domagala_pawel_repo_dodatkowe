import java.math.BigDecimal;
import java.math.MathContext;

public class Dzialanie {
    MathContext mc = new MathContext(5);
    public BigDecimal dodawanie(BigDecimal a, BigDecimal b){
        return (a.add(b, mc));
    }
    public BigDecimal odejmownie(BigDecimal a, BigDecimal b){
        return (a.subtract(b, mc));
    }
    public BigDecimal mnozenie(BigDecimal a, BigDecimal b){
        return (a.multiply(b, mc));
    }
    public BigDecimal dzielenie(BigDecimal a, BigDecimal b){
        return (a.divide(b, mc));
    }
    public BigDecimal potegowanie(BigDecimal a, BigDecimal b){
        return (a.pow(b.intValue(), mc));
    }
    public BigDecimal pierwiastkowanie(BigDecimal a, MathContext mc){
        return (a.sqrt(mc));
    }
}
