<?
    if((isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['email'])&&$_POST['email']!="")&&(isset($_POST['phone'])&&$_POST['phone']!="")&&(isset($_POST['organization'])&&$_POST['organization']!="")&&(isset($_POST['participants'])&&$_POST['participants']!="")){ //Проверка отправилось ли наше поля name и не пустые ли они
            $to = 'dmitriyazotov7@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
            $subject = 'Запись на обучение'; //Загаловок сообщения
            if (isset($_POST['prof'])) {
                $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <h2>'.$_POST['prof'].'</h2>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>Email: '.$_POST['email'].'</p>      
                        <p>Телефон: '.$_POST['phone'].'</p>      
                        <p>Организация: '.$_POST['organization'].'</p>    
                        <p>Кол-во участников: '.$_POST['participants'].'</p>                      
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
            } else {
                $message = '
                    <html>
                        <head>
                            <title>'.$subject.'</title>
                        </head>
                        <body>
                            <p>Имя: '.$_POST['name'].'</p>
                            <p>Email: '.$_POST['email'].'</p>      
                            <p>Телефон: '.$_POST['phone'].'</p>      
                            <p>Организация: '.$_POST['organization'].'</p>    
                            <p>Кол-во участников: '.$_POST['participants'].'</p>                      
                        </body>
                    </html>'; //Текст нащего сообщения можно использовать HTML теги
            }
            $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
            $headers .= "From: Отправитель <dmitriyazotov7@gmail.com>\r\n"; //Наименование и почта отправителя
            mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
    }
?>