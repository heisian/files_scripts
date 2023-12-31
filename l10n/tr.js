OC.L10N.register(
    "files_scripts",
    {
    "An error occurred when saving the action." : "İşlem kaydedilirken bir sorun çıktı.",
    "Action does not exist or is disabled." : "İşlem bulunamadı ya da devre dışı bırakılmış.",
    "This action is not enabled on public shares." : "Bu işlem herkese açık paylaşımlarda yapılamaz.",
    "Failed to create the action variables." : "İşlem değişkenleri oluşturulamadı.",
    "Lua extension not installed on the server." : "Sunucu üzerinde Lua eklentisi kurulu değil.",
    "No script was chosen." : "Herhangi bir betik seçilmemiş.",
    "Run file action" : "Dosya işlemini yap",
    "Pass files to a file action script and run it." : "Dosyaları bir dosya işlemi betiğine gönderir ve işlemi yapar.",
    "File actions" : "Dosya işlemleri",
    "An unexpected error occurred when running the action." : "İşlem yapılırken beklenmeyen bir sorun çıktı.",
    "Title is empty." : "Başlık boş.",
    "A script already exists with this title." : "Aynı adlı bir betik zaten var.",
    "Scripting tool which allows administrators to expand the file options menu." : "Yöneticilerin dosya seçenekleri menüsünü genişletmesini sağlayan betik oluşturma aracı.",
    "Edit" : "Düzenle",
    "Delete" : "Sil",
    "Enabled" : "Etkin",
    "Disabled" : "Devre dışı",
    "Back" : "Geri",
    "Variable name" : "Değişken adı",
    "User prompt" : "Kullanıcı girişi",
    "Input type" : "Giriş türü",
    "Large text area" : "Geniş metin alanı",
    "Allow multiple selections" : "Birkaç seçim yapılabilsin",
    "Multi-select options" : "Çoklu seçim seçenekleri",
    "Allowed MIME types (defaults to all)" : "İzin verilen MIME türleri (varsayılan olarak tümü)",
    "Save" : "Kaydet",
    "Text" : "Metin",
    "Checkbox" : "İşaret kutusu",
    "File picker" : "Dosya seçici",
    "Multi-select" : "Çoklu seçim",
    "User inputs" : "Kullanıcı girişleri",
    "Move to bottom" : "Aşağıya taşı",
    "Add input" : "Giriş ekle",
    "Script input name cannot be empty" : "Betik giriş adı boş olamaz",
    "Script input name already in use." : "Bu betik giriş adı zaten kullanılıyor.",
    "Script name" : "Betik adı",
    "A short description of what this action will do …" : "Bu işlemin ne yaptığının kısa bir açıklaması…",
    "Enable script" : "Betiği etkinleştir",
    "Show in context menu" : "Sağ tık menüsünde görüntülensin",
    "Allow on public shares" : "Herkese açık paylaşımlarda kullanılabilsin",
    "Limit to groups" : "Şu gruplarla sınırlansın",
    "Select groups allowed to use this action" : "Bu işlemi yapabilecek grupları seçin",
    "Limit by file types" : "Dosya türleriyle sınırla",
    "Media type or file extension (e.g. text/plain, doc)" : "Ortam türü ya da dosya eklentisi (text/plain, doc gibi)",
    "Saved" : "Kaydedildi",
    "An error occurred during saving" : "Kaydedilirken bir sorun çıktı",
    "Unknown error" : "Bilinmeyen sorun",
    "Select an action to perform" : "Yapılacak bir işlem seçin",
    "Select action to perform" : "Yapılacak işlemi seçin",
    "Execute" : "Yürüt",
    "Action completed!" : "İşlem tamamlandı!",
    "Action failed unexpectedly." : "İşlem beklenmedik şekilde sonlandı.",
    "File actions are not available because there is no available interpreter. Either install the Lua plugin on the server or enable the experimental interpreter." : "Kullanılabilecek bir yorumlayıcı olmadığından dosya işlemleri kullanılamaz. Sunucuya Lua eklentisini kurun ya da deneysel yorumlayıcıyı etkinleştirin.",
    "New action" : "Yeni işlem",
    "No actions" : "Herhangi bir işlem yok",
    "No file actions exist." : "Herhangi bir dosya işlemi yok.",
    "Experimental interpreter" : "Deneysel yorumlayıcı",
    "It is highly recommended to run the PHP Lua extension on your server. If this is not possible, the experimental Lua interpreter may be used. This interpreter is still under development and may not always produce the expected results." : "Sunucunuzda PHP Lua uzantısını çalıştırmanız önemle önerilir. Bu yapılamıyorsa deneysel Lua yorumlayıcısı kullanılabilir. Bu yorumlayıcı hala geliştirme aşamasındadır ve her zaman beklenen sonuçları vermeyebilir.",
    "Use experimental interpreter" : "Deneysel yorumlayıcı kullanılsın",
    "More actions" : "Diğer işlemler",
    "Allows administrators to write small scripts which users can run through via the file actions menu in the Files app!\n\n- **🌕 Lua:** Script in Lua, its simple and has plenty of online resources.\n- **⚡️Empower users:** Make hard tasks easy, straight from the Files app.\n- **🙋 Open to suggestions:** Are you missing a function in the scripting API? Open an issue on Github!\n- **🤖 Integration with Nextcloud Flow:** allows you to fully automate workflows\n\n⚠️**Attention** Scripts may modify and delete files permanently. Take care and make sure to read the documentation thoroughly before scripting." : "Yöneticilerin, Dosyalar uygulamasındaki dosya işlemleri menüsüne kullanıcıların çalıştırabileceği küçük betikler eklemesini sağlar!\n\n- **🌕 Lua:** Lua dilindeki betikler. Basittir ve çok sayıda çevrimiçi kaynak bulunabilir.\n- **⚡️Kullanıcıları destekler:** Zor işlerin Dosyalar uygulamasından kolayca yapılmasını sağlar.\n- **🙋 Önerilere açık:** Betik API yazılımda eksik bir işlev mi gerekiyor? Github üzerinden bildirin!\n- **🤖 Nextcloud Flow ile bütünleştirme:**İş akışlarınızı tümüyle otomatikleştirin\n\n⚠️**Dikkat** Betikler dosyaları kalıcı olarak değiştirebilir ya da silebilir. Dikkatli olun ve betikleri kullanmadan önce belgeleri tümüyle okuduğunuzdan emin olun.",
    "Specify any number of input values the user may provide when running this action. These will be accessible to the script via the get_input() function." : "Bu işlemi yaparken kullanıcının seçebileceği herhangi bir sayıda giriş değeri belirtin. Komut dosyası bu değerlere get_input() işlevi aracılığıyla erişebilir.",
    "Limit to specific MIME type" : "Belirli MIME türleri ile sınırlansın",
    "MIME type (e.g. text/plain)" : "MIME türü (tex/plain gibi)",
    "File actions are small Lua scripts that can create, modify, and/or delete files programatically. These actions may be triggered by users to be run on their files. Please read the documentation for more information." : "Dosya işlemleri, program ile dosyaları oluşturabilen, değiştirebilen ve/veya silebilen küçük Lua betikleridir. Kullanıcılar bu işlemleri dosyaları üzerinde yapabilir. Ayrıntılı bilgi almak için lütfen belgeleri okuyun.",
    "Actions in menu" : "İşlemler menüde görüntülensin",
    "Shows file actions directly in the file menu, instead of needing to select it through the 'More actions' modal." : "Bu seçenek etkinleştirildiğinde, dosya işlemleri üste açılan 'Diğer işlemler' penceresi yerine doğrudan dosya menüsünde görüntülenir."
},
"nplurals=2; plural=(n > 1);");
