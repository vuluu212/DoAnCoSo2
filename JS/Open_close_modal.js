const click_re = document.querySelectorAll('.click_registration') //lấy tất cả các lớp
        const modal_re = document.querySelector(".js_modal_re")
        const modalClose_re = document.querySelectorAll(".come_back")
        const click_tab_re = document.querySelectorAll('.button_re')

        const click_lo = document.querySelectorAll('.click_login')
        const modal_lo = document.querySelector(".js_modal_lo")
        const modalClose_lo = document.querySelectorAll(".come_back")
        const click_tab_lo = document.querySelectorAll('.button_lo')

        //Đăng ký

        //trường hợp đang mở modal đăng ký nhưng người dùng bấm button đăng nhập
        function close_tab_re(){
            modal_re.classList.remove('open_re')
        }
        
        for(const click of click_lo)
        {
            click.addEventListener('click', close_tab_re)
        }

        //Trường hợp đã có tài khoản đăng nhập
        function open_tab_re(){
            modal_re.classList.remove('open_re')

            modal_lo.classList.add('open_lo')
        }

        for(const click of click_tab_re)
        {
            click.addEventListener('click', open_tab_re)
        }

        //Trường hợp nhấn nút close ở modal đăng ký
        function open_re(){
            modal_re.classList.add('open_re')
        }

        function close_re(){
            modal_re.classList.remove('open_re')
        }


        for(const click of click_re)
        {
            click.addEventListener('click', open_re)
        }

        for(const modalClose of modalClose_re)
        {
            modalClose.addEventListener('click', close_re)
        }


        //Đăng nhập


        //trường hợp đang mở modal đăng nhập nhưng người dùng bấm button đăng ký
        function close_tab_lo(){
            modal_lo.classList.remove('open_lo')
        }

        for(const click of click_re)
        {
            click.addEventListener('click', close_tab_lo)
        }

        //Trường hợp chưa có tài khoản đăng nhập
        function open_tab_lo(){
            modal_lo.classList.remove('open_lo')

            modal_re.classList.add('open_re')
        }

        for(const click of click_tab_lo)
        {
            click.addEventListener('click', open_tab_lo)
        }

        //Trường hợp nhấn nút close ở modal đăng nhập
        
        function open_lo(){
            modal_lo.classList.add('open_lo')
        }

        function close_lo(){
            modal_lo.classList.remove('open_lo')
        }

        for(const click of click_lo)
        {
            click.addEventListener('click', open_lo)
        }

        for(const modalClose of modalClose_lo)
        {
            modalClose.addEventListener('click', close_lo)
        }
