import java.io.FileWriter;
import java.io.IOException;

public class SaveToFile {
    public static void writeFile(String fileName, String text) {
        try {
            FileWriter fw = new FileWriter(fileName);
            fw.write(text);
            fw.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
