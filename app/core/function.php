<?  // Functions

    function go($addr) {
        header("Location: /".$addr);
    }

    function not_found_f() {
        go("404");
    }

    function include_end($inc) {
        include $inc;
        exit();
    }

    function get_page($page_name) {
        include PAGES_PATH.$page_name.'.php';
    }

    function get_template($tml_name) {
        include 'template/'.$tml_name.'.php';
    }

    function get_page_sector() {
        $url = explode('/', $_SERVER['REQUEST_URI']);

        return $url[1];
    }

    function active_is_page($page) {
        if($page == get_page_sector())
            echo 'active';
    }