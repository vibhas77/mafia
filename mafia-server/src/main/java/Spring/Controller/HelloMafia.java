package Spring.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloMafia {

    @RequestMapping("/hello")
    public String helloSpring(String[] args) {

        return "Hello Spring";

    }

}
