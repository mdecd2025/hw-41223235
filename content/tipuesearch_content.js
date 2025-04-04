var tipuesearch = {"pages": [{'title': 'About', 'text': '課程名稱: 協同產品設計實習 - Collaborative Product Design Practice \n 學員作業網站:\xa0 https://mdecd2025.github.io/hw-41223235/ \n 學員作業倉儲: https://github.com/mdecd2025/hw-41223235 \n \n 課程代號: cd2025 \n Teams 線上教學: \n 以 "學號@nfu.edu.tw" 登入 \xa0 https://login.microsoftonline.com/ \xa0 Office 365 \n Teams 團隊代碼:\xa0 p5z4eku \n \n 課程評分: \n Homework (30%) - 每週至少提交兩次與課程進度有關的內容, 完成後填回自評表單 \n Exam (40%) - 建立包含操作流程影片、心得以及提供檔案下載的網頁後填回自評表單 \n Final Report (30%) - 利用網頁內容進行簡報並提交 pdf 格式書面報告, 完成後填回自評表單 \n', 'tags': '', 'url': 'About.html'}, {'title': 'repo', 'text': '', 'tags': '', 'url': 'repo.html'}, {'title': 'Tasks', 'text': 'task1 與 task2 任務目的在建立可於近端維護個人作業與協同作業的準備工作: \n task1 (自行製作可攜程式系統) \n task2 (使用 SSH 協定執行作業倉儲的推送) \n task3 與 task4 則為 HW2 的內容之一 \n task3 (使用 Solvespace 建立平面四連桿系統零組件) \n task4 (使用 Onshape 建立平面四連桿系統零組件) \n task5 與 task6 則為 HW3 的主要內容 \n task5 (Webots Tutorial 1 ~3) \n task6 (Webots Tutorial 4 ~6) \n \n \n', 'tags': '', 'url': 'Tasks.html'}, {'title': 'list', 'text': '1.0初始版 : 可執行但功能不多。( 執行結果 ) \n from browser import html, document\nimport urllib.request\n \n# 設定 URL\nurl = "https://mde.tw/list/2b.txt"\n \n# 讀取網站內容\nresponse = urllib.request.urlopen(url)\ndata = response.read().splitlines()  # 直接讀取並按行分割\n \n# 確保資料存在\nif len(data) > 1:\n    all_stud = data[1:]  # 跳過標題列\n    print("總共有 " + str(len(all_stud)) + " 名學員")\nelse:\n    all_stud = []\n    print("學員名單讀取失敗")\n \n# 找到網頁中的特定位置\nbrython_div1 = document["brython_div1"]\n \n# **動態插入所有學員資料，並為帳號添加超連結**\nfor index, student in enumerate(all_stud, start=1):\n    parts = student.split()  # 用空格分割學號和帳號\n    if len(parts) == 2:\n        student_id, account = parts\n        # 設定超連結\n        account_link = f"https://mdecd2025.github.io/hw-{account.strip()}"\n        # 插入學號和帳號的超連結\n        brython_div1 <= f"{index}. {student_id.strip()} - " + html.A(account.strip(), href=account_link)\n        brython_div1 <= html.BR()  # 換行\n    else:\n        print(f"格式錯誤，跳過此行: {student}")\n \n# 測試固定超連結\nbrython_div1 <= html.BR()\nbrython_div1 <= "附加連結: " + html.A("github.com", href="https://github.com") \n \n 2.0完成版 : 這版具有完整功能，並且能夠顯示2b組員的倉儲和網站。( 執行結果 ) \n # 從 Brython 程式庫中的 browser 導入 html, document, ajax\nfrom browser import html, document, ajax\n\n# 定義處理學員資料的函式\ndef process_data(req):\n    if req.status == 200:  # 確保請求成功\n        data = req.text.splitlines()  # 讀取並拆成每一行\n        all_stud = data[1:]  # 跳過標題列\n        brython_div1 = document["brython_div1"]  # 取得對應的網頁區塊\n\n        # 清空原有內容\n        brython_div1.clear()\n\n        for line in all_stud:\n            fields = line.split("\\t")  # 以 Tab 分隔學號與 GitHub 帳號\n            if len(fields) < 2 or not fields[1].strip():  # 若帳號欄位為空，則跳過\n                continue\n            \n            stud_num = fields[0].strip()  # 學號\n            github_account = fields[1].strip()  # GitHub 帳號\n            scrum_url = f"https://mdecd2025.github.io/hw-{github_account}"  # Scrum 連結\n            github_url = f"https://github.com/mdecd2025/hw-{github_account}"  # GitHub 連結\n\n            # 插入學號與 GitHub 連結\n            brython_div1 <= html.P(\n                [\n                    html.A(stud_num, href=scrum_url, target="_blank", style={"margin-right": "10px"}),  # 學號連結\n                    " | ",\n                    html.A(github_account, href=github_url, target="_blank")  # GitHub 帳號作為超連結\n                ]\n            )\n\n# 使用 AJAX 非同步讀取 2b.txt\najax.get("https://mde.tw/list/2b.txt", oncomplete=process_data)\n \n \n \n \n 2.1完成版 : 這版具有完整功能多增加了顏色。( 執行結果 ) \n from browser import html, document, ajax\n\n# 定義處理學員資料的函式\ndef process_data(req):\n    if req.status == 200:  # 確保請求成功\n        data = req.text.splitlines()  # 讀取並拆成每一行\n        all_stud = data[1:]  # 跳過標題列\n        brython_div1 = document["brython_div1"]  # 取得對應的網頁區塊\n\n        # 清空原有內容\n        brython_div1.clear()\n\n        # 檢查是否有學員資料\n        if not all_stud:\n            brython_div1 <= html.P("學員資料未找到，請稍後再試。")\n            return\n\n        for line in all_stud:\n            fields = line.split("\\t")  # 以 Tab 分隔學號與 GitHub 帳號\n            if len(fields) < 2 or not fields[1].strip():  # 若帳號欄位為空，則跳過\n                continue\n             \n            stud_num = fields[0].strip()  # 學號\n            github_account = fields[1].strip()  # GitHub 帳號\n            scrum_url = f"https://mdecd2025.github.io/hw-{github_account}"  # Scrum 連結\n            github_url = f"https://github.com/mdecd2025/hw-{github_account}"  # GitHub 連結\n\n            # 插入學號與 GitHub 連結\n            brython_div1 <= html.P(\n                [\n                    html.A(stud_num, href=scrum_url, target="_blank", style={"margin-right": "10px", "color": "blue", "text-decoration": "none"}),  # 學號連結\n                    " | ",\n                    html.A(github_account, href=github_url, target="_blank", style={"color": "green", "text-decoration": "none"})  # GitHub 帳號作為超連結\n                ]\n            )\n    else:\n        brython_div1 <= html.P("資料加載失敗，請稍後再試。")\n\n# 使用 AJAX 非同步讀取 2b.txt\najax.get("https://mde.tw/list/2b.txt", oncomplete=process_data)\n \n \n \n \n 1.0小組版 : 列出2b-g3六人倉儲和作業 ( 執行結果 )\xa0 \n from browser import html, document, ajax\n\n# 指定要顯示的學員列表\nselected_students = {"41223235", "RAY41223215", "hyy41223228", "41223227", "41223206", "41223226-0", "41223226", "41223228", "41223215"}\n\n# 定義處理學員資料的函式\ndef process_data(req):\n    if req.status == 200:  # 確保請求成功\n        data = req.text.splitlines()  # 讀取並拆成每一行\n        all_stud = data[1:]  # 跳過標題列\n        brython_div1 = document["brython_div1"]  # 取得對應的網頁區塊\n\n        # 清空原有內容\n        brython_div1.clear()\n\n        # 檢查是否有學員資料\n        if not all_stud:\n            brython_div1 <= html.P("學員資料未找到，請稍後再試。")\n            return\n\n        for line in all_stud:\n            fields = line.split("\\t")  # 以 Tab 分隔學號與 GitHub 帳號\n            if len(fields) < 2 or not fields[1].strip():  # 若帳號欄位為空，則跳過\n                continue\n              \n            stud_num = fields[0].strip()  # 學號\n            github_account = fields[1].strip()  # GitHub 帳號\n            \n            # 只處理選定的學員\n            if stud_num not in selected_students:\n                continue\n            \n            scrum_url = f"https://mdecd2025.github.io/hw-{github_account}"  # 作業網站\n            github_url = f"https://github.com/mdecd2025/hw-{github_account}"  # 作業倉儲\n\n            # 插入學號與 GitHub 連結\n            brython_div1 <= html.P(\n                [\n                    html.A(stud_num, href=scrum_url, target="_blank", style={"margin-right": "10px", "color": "blue", "text-decoration": "none"}),  # 作業網站連結\n                    " | ",\n                    html.A(github_account, href=github_url, target="_blank", style={"color": "green", "text-decoration": "none"})  # 作業倉儲連結\n                ]\n            )\n    else:\n        brython_div1 <= html.P("資料加載失敗，請稍後再試。")\n\n# 使用 AJAX 非同步讀取 2b.txt\najax.get("https://mde.tw/list/2b.txt", oncomplete=process_data)\n \n \xa0 \n \n \n \n', 'tags': '', 'url': 'list.html'}, {'title': 'tasks1', 'text': 'Portable\xa0 自行製作可攜程式系統 \n 目前最新的 Python 版本為 3.13.2, 利用舊版的 Python310,來建立 Python313可攜程式\xa0 \n (為了配合 Siemens NX2312) \n', 'tags': '', 'url': 'tasks1.html'}, {'title': 'IPv6', 'text': '\n \n 任務一  執行結果 \n from browser import document, html\n\n# 取得目標 div\ndiv = document["brython_div1"]\n\n# 基本 IPv6 前綴（數字部分動態變化）\nbase_ip = "2001:288:6004:17:fff1:cd25:0000:b"\nport = "8000"\n\n# 學員編號清單（含序號）\nstudent_ids = [\n    "40923137", "41023114", "41023205", "41023206", "41023210", "41023213", "41023215", "41023216",\n    "41023218", "41023232", "41023237", "41071202", "41071203", "41071204", "41223201", "41223202",\n    "41223203", "41223205", "41223206", "41223207", "41223208", "41223209", "41223210", "41223211",\n    "41223212", "41223214", "41223215", "41223216", "41223217", "41223218", "41223219", "41223220",\n    "41223221", "41223222", "41223223", "41223224", "41223225", "41223226", "41223227", "41223228",\n    "41223229", "41223230", "41223231", "41223232", "41223233", "41223234", "41223235", "41223236",\n    "41223237", "41223239", "41223240", "41223242", "41223243", "41223244", "41223245", "41223246",\n    "41223247", "41223248", "41223249", "41223250", "41223251", "41223252", "41223253", "41271217",\n    "41271236", "41271237"\n]\n\n# 建立清單容器\nul = html.UL()\n\n# 產生連結\nfor i, student_id in enumerate(student_ids, start=1):\n    ipv6_suffix = f"{i:03d}"  # 轉換為三位數，例如 001, 002, ..., 066\n    full_ip = f"{base_ip}{ipv6_suffix}"  # 拼接完整 IPv6 地址\n    url = f"http://[{full_ip}]:{port}"\n    \n    # 建立超連結（格式：1 . 40923137）\n    link_text = f"{i} . {student_id}"\n    link = html.A(link_text, href=url, target="_blank")\n    \n    # 放入清單項目\n    ul <= html.LI(link)\n\n# 將清單加入 div\ndiv <= ul\n \n \n \n \n', 'tags': '', 'url': 'IPv6.html'}, {'title': 'tasks2', 'text': '使用 SSH 協定執行作業倉儲的推送 \n IPv6 首先要先下載 portable_wcm2025.7z ,然後到如圖下,新增 資料夾 (倉儲學號),內容資料在github下載資料總管到前面的 資料夾裡面 ,接下來是影片操作過程\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 :) Hzx \n \n \n \n \n \n', 'tags': '', 'url': 'tasks2.html'}, {'title': 'w3', 'text': '目前尚未納入分組的學員名單. \n from browser import html, document\nimport urllib.request\n \n# 設定 URL\nurl = "https://mde.tw/list/2b.txt"\n \n# 讀取網站內容\nresponse = urllib.request.urlopen(url)\ndata = response.read().splitlines()  # 直接讀取並按行分割\n \n# 確保資料存在\nif len(data) > 1:\n    all_stud = data[1:]  # 跳過標題列\n    print("總共有 " + str(len(all_stud)) + " 名學員")\nelse:\n    all_stud = []\n    print("學員名單讀取失敗")\n \n# 已分組的帳號名單\ngrouped_accounts = {\n    \'41223251\', \'41223211\', \'41223245\', \'41223243\', \'jjjay41223212\', \'leeshaowei0716\', \n    \'41223234\', \'41223209\', \'41223205\', \'41223201\', \'41223202\', \'41223208-hw\', \'41223216\', \n    \'41223217\', \'41223248\', \'emma0312\', \'41223242\', \'41223203\', \'41223144\', \'41223235\', \n    \'RAY41223215\', \'hyy41223228\', \'41223227\', \'41223206\', \'41223226-0\', \'Cloud41223237\', \n    \'Yujenchuang\', \'41223225\', \'ljg41223220\', \'supowen\', \'jacky93111\', \'41223246\', \'Liu41223244\', \n    \'41223236\', \'41223219\', \'41271237\', \'41223249\', \'41223229\', \'41223224\', \'41223222\', \n    \'41223231\', \'linryan23\', \'41023114\', \'41223230\', \'timluo123\', \'CYC41223247\', \'41223218\', \n    \'ych0227\', \'41023215\', \'41023216\', \'41023213\', \'41071203\', \'41071204\', \'41071202\', \n    \'c-ching\', \'YUN4\', \'tseYU000\', \'snowfall-killer\', \'junpig10\'\n}\n \n# 找到網頁中的特定位置\nbrython_div1 = document["brython_div1"]\n \n# **動態插入未分組的學號與超連結**\nindex = 1\nfor student in all_stud:\n    parts = student.strip().split()  # 用空格分割\n    if len(parts) == 0:\n        continue  # 跳過空行\n     \n    student_id = parts[0]  # 學號\n    account = parts[1] if len(parts) > 1 else student_id  # 若帳號空白則用學號當帳號\n \n    if account not in grouped_accounts:  # 只處理未分組帳號\n        # 設定學號的超連結\n        student_link = f"https://mdecd2025.github.io/hw-{account}"\n        # 設定repo的超連結\n        repo_link = f"https://github.com/mdecd2025/hw-{account}"\n         \n        # 插入學號作為超連結，並添加 repo 連結\n        brython_div1 <= f"{index}. " + html.A(student_id, href=student_link) + " "\n        brython_div1 <= f"（" + html.A("repo", href=repo_link) + "）"\n        brython_div1 <= html.BR()  # 換行\n        index += 1 \n \n \n \n \n', 'tags': '', 'url': 'w3.html'}, {'title': 'tasks3', 'text': '使用 Solvespace 建立平面四連桿系統零組件 \n Download.slvs \n link1 \n \\ \n link2 \n \n link3 \n \n base \n \n \n shaft \n \n shaft2 \n \n fourbar linkage design \n \n fourbar linkage design w assembly \n', 'tags': '', 'url': 'tasks3.html'}, {'title': 'tasks4', 'text': '使用 Onshape 建立平面四連桿系統零組件 \n', 'tags': '', 'url': 'tasks4.html'}, {'title': 'tasks5', 'text': 'Webots Tutorial 1 ~3 \n', 'tags': '', 'url': 'tasks5.html'}, {'title': 'tasks6', 'text': 'Webots Tutorial 4 ~6 \n', 'tags': '', 'url': 'tasks6.html'}, {'title': '1', 'text': '', 'tags': '', 'url': '1.html'}, {'title': 'Homework', 'text': '作業 (30%) \n HW1 (5%):  建立由 Box 組成的平面四連桿機構 Webots 模擬場景 \n part1: \n 請各學員在 USB 隨身碟或個人電腦上完成 cd2025 課程所需的可攜系統配置: \n 下載  portable_wcm2025.7z  (330MB, 解開壓縮後 1.4GB) \n Webots_2025a.7z  (1.5 GB, 解開後約為 2.9GB, 可單獨運作) \n Webots_2025a_web.7z  (171 MB, 解開壓縮後約為 1GB, 必須連網運作) \n Blender4.2.7z \n part2: \n 請各學員完成可攜程式系統配置後, 利用 Webots R2025a 中寬度與高度都為 0.1m 的 box 物件建立一個簡單的平面四連桿機構模擬場景. \n base (基座) 長度 1m, link1 長度 0.4m, link2 長度 0.6m, link3 長度 0.9m, 各轉軸均為 HingeJoint, joint1 旋轉速度設定為 1radian/sec. \n part3: \n 模擬場景啟動後, 按下 s 鍵機構開始作動, 按下 p 鍵後機構暫停. \n 參考資料: \n cd2025_hw1_demo.7z \n HW2 (5%):  建立由 CAD 繪製零件組成的平面四連桿機構 Webots 模擬場景 \n 各學員請利用 CAD 系統依據 HW1 的連桿尺寸與運動方式, 配置適當大小的旋轉軸以及基座後, 利用 Webots R2025a 完成一個簡單的平面四連桿機構模擬場景. \n 參考資料: \n fourbar_slvs.7z \n HW3 (20%): 建立 Webots 桌上籃球遊戲機模擬系統 \n 請各分組利用CAD 系統建立一個能在電腦桌 (1600W X 700D X 740H mm) 上運作的投籃機構 ( 參考影片 )後, 導入 Webots R2025a 套件, 建立一個能由使用者透過鍵盤按鍵操作, 且具備計分板的籃球遊戲機模擬系統. \n 參考資料: \n 參考資料: \n fourbar_ball_throwing_linkage.slvs \n sixbar_ball_throwing_linkage.slvs \n \n', 'tags': '', 'url': 'Homework.html'}, {'title': 'HW1', 'text': 'HW1 (5%):  建立由 Box 組成的平面四連桿機構 Webots 模擬場景 \n 操作影片標題: 國立虎尾科技大學 - 機械設計工程系 - cd2025 HW1 - 學員學號 \n \n', 'tags': '', 'url': 'HW1.html'}, {'title': 'HW2', 'text': 'HW2 (5%):  建立由 CAD 繪製零件組成的平面四連桿機構 Webots 模擬場景 \n 操作影片標題: 國立虎尾科技大學 - 機械設計工程系 - cd2025 HW2 - 學員學號 \n \n', 'tags': '', 'url': 'HW2.html'}, {'title': 'HW3', 'text': 'HW3 (20%): 建立 Webots 桌上籃球遊戲機模擬系統 \n 操作影片標題: 國立虎尾科技大學 - 機械設計工程系 - cd2025 HW3 - 學員學號 \n \n', 'tags': '', 'url': 'HW3.html'}, {'title': 'Midterm', 'text': '本課程所繳交的期中成績為學員自評之學習期望成績. \n 期中考週的自評期望成績繳交流程: \n \n 整理先前所完成的各週的進度、作業網頁內容以及心得 \n 拍攝期中自評影片, 上傳至 Youtube 後, 以" 國立虎尾科技大學 - 機械設計工程系 - cd2025 期中自評- 學員學號 "為影片標題後嵌入本頁面中 \n 回填期中自評表單 \n 上傳學員期中成績 \n \n 各週進度: \n 各週網頁內容: \n 期中心得: \n 期中自評影片: \n \n \n', 'tags': '', 'url': 'Midterm.html'}, {'title': 'Exam', 'text': 'Exam1 (10%): 建立 Webots 基本物件模擬場景 \n 各學員利用 Webots R2025a 套件中的 Shape 物件, 隨堂建立指定的機電系統模擬場景, 並利用 Python 程式進行互動控制. \n Exam2 (10%): 利用 CAD 零組件建立模擬場景\xa0 \n 各學員利用 CAD (Solvespace 與 NX2312), 隨堂建立指定的系統模型零組件後, 導入 Webots R2025a 後, 建立機電系統模擬場景, 並利用 Python 程式進行互動控制. \n Exam3 (20%): Webots 機電模擬場景的協同設計 \n 各分組利用 CAD (Solvespace 與 NX2312), 隨堂建立指定的系統模型零組件後, 導入 Webots R2025a 後, 建立機電系統模擬場景, 並利用 Python 程式進行互動控制. 過程中各學員必須採同步協同模式, 維護從 Github Classroom 取得的分組協同倉儲以及網站. \n 協同分組方式: \n \n 分配學員負責利用 Solvespace 建立系統零組件, 過程中必須將所建構之零組件檔案與繪圖過程影片上傳至分組網頁. \n 分配學員負責利用 NX2312 建立系統零組件, 過程中必須將所建構之零組件檔案與繪圖過程影片上傳至分組網頁. \n 分配學員負責利用 Webots 建立機電系統模擬場景, 並利用 Python 程式進行控制, 過程中必須將建構過程拍成帶有說明字幕的影片上傳至分組網頁. \n \n', 'tags': '', 'url': 'Exam.html'}, {'title': 'Exam1', 'text': 'Exam1 (10%): 建立 Webots 基本物件模擬場景 \n 操作影片標題: 國立虎尾科技大學 - 機械設計工程系 - cd2025 Exam1 - 學員學號 \n', 'tags': '', 'url': 'Exam1.html'}, {'title': 'Exam2', 'text': 'Exam2 (10%): 利用 CAD 零組件建立模擬場景 \n 操作影片標題: 國立虎尾科技大學 - 機械設計工程系 - cd2025 Exam2 - 學員學號 \n', 'tags': '', 'url': 'Exam2.html'}, {'title': 'Exam3', 'text': 'Exam3 (20%): Webots 機電模擬場景的協同設計 \n 操作影片標題: 國立虎尾科技大學 - 機械設計工程系 - cd2025 Exam3 - 學員學號 \n', 'tags': '', 'url': 'Exam3.html'}, {'title': 'Final', 'text': '期末協同專案執行過程影片、簡報與 PDf 報告檔案 (六人一組) (30%) \n 題目:  Webots 動態投籃模擬系統的協同設計 \n 說明:  \n 籃框架被配置在一定範圍內, 可隨機慢速前進、後退及左右擺動, 投籃機構系統帶有一定數量的籃球, 被配置在可自由移動的輪車上. \n 操作者可利用鍵盤特定按鍵控制投籃輪車的移動並發射投籃, 每投出一球後系統透過記分板進行計分, 並由送球機構進行補球或移動輪車取球, 遊戲可進行至全部數量籃球投完為止. \n 請將期末協同專案執行過程、內容與心得, 製作成影片，配合字幕上傳至 Youtube 後嵌入各階段的期末報告頁面中. \n 影片標題:  國立虎尾科技大學 - 機械設計工程系 - cd2025 期末報告 - 學員學號 - 各階段影片主題 \n', 'tags': '', 'url': 'Final.html'}, {'title': 'Brython', 'text': '1 add to 100 \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};