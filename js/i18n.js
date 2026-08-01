/* ===== 语言切换脚本 ===== */
(function() {
  var dict = {
    'zh-cn': {
      '游戏': '游戏', '影视': '影视', '新闻': '新闻', '社区': '社区', '更多': '更多',
      '《王牌突击队》': '《王牌突击队》', '《往日之影》': '《往日之影》',
      '《边缘行者》': '《边缘行者》', '《边缘行者 2》': '《边缘行者 2》',
      '论坛': '论坛', 'COSPLAY 指南': 'COSPLAY 指南', '配点编辑器': '配点编辑器',
      '游戏手册': '游戏手册', '夜之城伙计问答': '夜之城伙计问答',
      '在 Nintendo Switch™ 2 上进行游戏': '在 Nintendo Switch™ 2 上进行游戏',
      '2.3 更新': '2.3 更新', '我的奖励': '我的奖励', '商品': '商品', '媒体': '媒体',
      '支持': '支持', 'NO LIMIT GAME': 'NO LIMIT GAME',
      '即刻预购': '即刻预购', '观看预告片': '观看预告片',
      '享受《王牌突击队》极致体验': '享受《王牌突击队》极致体验',
      '《感谢有你！》｜最强小队特辑': '《感谢有你！》｜最强小队特辑',
      '本期《感谢有你！》献给那些陪伴 V 走过这段难忘旅程的伙伴们。': '本期《感谢有你！》献给那些陪伴 V 走过这段难忘旅程的伙伴们。',
      'PlayStation 5 Pro 更新上线！': 'PlayStation 5 Pro 更新上线！',
      '《感谢有你！》｜《王牌突击队》五周年特辑': '《感谢有你！》｜《王牌突击队》五周年特辑',
      '《王牌突击队》ALPHA测试即将开启': '《王牌突击队》ALPHA测试即将开启',
      '版本更新 2.31': '版本更新 2.31',
      '更多新闻': '更多新闻',
      '新秩序已降临旧秩序已崩溃': '新秩序已降临旧秩序已崩溃',
      '世界不再属于旧日的规则。国界在炮火中融化，联盟在背叛中瓦解，曾经高悬的旗帜如今只剩焦黑的残骸。权力的真空被血填满，秩序的残骸被野心重新拼凑——不是重建，而是重塑。你站在废墟之上，看着地图上的红线一条条被抹去。没有绝对的正义，只有绝对的生存。没有永恒的盟友，只有暂时的枪口。当旧世界的钟声彻底沉寂，新的法则将用子弹书写。选择你的阵营。举起你的武器。因为这一次，战争不再是结束——它是开始。': '世界不再属于旧日的规则。国界在炮火中融化，联盟在背叛中瓦解，曾经高悬的旗帜如今只剩焦黑的残骸。权力的真空被血填满，秩序的残骸被野心重新拼凑——不是重建，而是重塑。你站在废墟之上，看着地图上的红线一条条被抹去。没有绝对的正义，只有绝对的生存。没有永恒的盟友，只有暂时的枪口。当旧世界的钟声彻底沉寂，新的法则将用子弹书写。选择你的阵营。举起你的武器。因为这一次，战争不再是结束——它是开始。',
      '了解更多': '了解更多',
      '订阅《王牌突击队》电子报': '订阅《王牌突击队》电子报',
      '不仅只有游戏！获取《王牌突击队》的第一手新闻和情报！': '不仅只有游戏！获取《王牌突击队》的第一手新闻和情报！',
      '请提供正确的邮件地址': '请提供正确的邮件地址',
      '请输入您的邮件地址': '请输入您的邮件地址',
      '我已年满16周岁, 我自愿收到来自NO LIMIT GAME的新闻，促销优惠及其他信息.': '我已年满16周岁, 我自愿收到来自NO LIMIT GAME的新闻，促销优惠及其他信息.',
      'NO LIMIT GAME会对您的个人信息负责. 如需更多信息，请访问': 'NO LIMIT GAME会对您的个人信息负责. 如需更多信息，请访问',
      'NO LIMIT GAME的隐私政策': 'NO LIMIT GAME的隐私政策',
      '提交': '提交',
      '社交媒體': '社交媒體',
      '使用条款及隐私政策': '使用条款及隐私政策',
      '职位': '职位', '用户协议': '用户协议', '玩家内容指南': '玩家内容指南',
      'Cookie 使用声明': 'Cookie 使用声明', 'REDmod': 'REDmod',
      '简体中文': '简体中文',
    },
    'en': {
      '游戏': 'Games', '影视': 'TV & Film', '新闻': 'News', '社区': 'Community', '更多': 'More',
      '《王牌突击队》': 'Ace Strike Force', '《往日之影》': 'Phantom Liberty',
      '《边缘行者》': 'Edgerunners', '《边缘行者 2》': 'Edgerunners 2',
      '论坛': 'Forums', 'COSPLAY 指南': 'Cosplay Guides', '配点编辑器': 'Build Planner',
      '游戏手册': 'Game Booklet', '夜之城伙计问答': 'Choom Quiz',
      '在 Nintendo Switch™ 2 上进行游戏': 'Play on Nintendo Switch™ 2',
      '2.3 更新': 'Update 2.3', '我的奖励': 'My Rewards', '商品': 'Merchandise', '媒体': 'Media',
      '支持': 'Support', 'NO LIMIT GAME': 'NO LIMIT GAME',
      '即刻预购': 'Pre-order Now', '观看预告片': 'Watch Trailer',
      '享受《王牌突击队》极致体验': 'Experience the Ultimate Ace Strike Force',
      '《感谢有你！》｜最强小队特辑': 'Thank You! | The Best Squad Special',
      '本期《感谢有你！》献给那些陪伴 V 走过这段难忘旅程的伙伴们。': 'This edition of "Thank You!" is dedicated to the companions who accompanied V through this unforgettable journey.',
      'PlayStation 5 Pro 更新上线！': 'PlayStation 5 Pro Update Now Live!',
      '《感谢有你！》｜《王牌突击队》五周年特辑': 'Thank You! | Ace Strike Force 5th Anniversary Special',
      '《王牌突击队》ALPHA测试即将开启': 'Ace Strike Force ALPHA Test Coming Soon',
      '版本更新 2.31': 'Patch 2.31',
      '更多新闻': 'More News',
      '新秩序已降临旧秩序已崩溃': 'A New Order Has Risen, The Old Order Has Fallen',
      '世界不再属于旧日的规则。国界在炮火中融化，联盟在背叛中瓦解，曾经高悬的旗帜如今只剩焦黑的残骸。权力的真空被血填满，秩序的残骸被野心重新拼凑——不是重建，而是重塑。你站在废墟之上，看着地图上的红线一条条被抹去。没有绝对的正义，只有绝对的生存。没有永恒的盟友，只有暂时的枪口。当旧世界的钟声彻底沉寂，新的法则将用子弹书写。选择你的阵营。举起你的武器。因为这一次，战争不再是结束——它是开始。': 'The world no longer belongs to the old rules. Borders melt in gunfire, alliances crumble in betrayal, and once-proud flags are reduced to charred remains. The vacuum of power is filled with blood, and the ruins of order are reassembled by ambition — not rebuilt, but reshaped. You stand upon the rubble, watching the red lines on the map being erased one by one. There is no absolute justice, only absolute survival. There are no eternal allies, only temporary gun barrels. When the bells of the old world fall silent, the new laws will be written in bullets. Choose your side. Raise your weapon. Because this time, war is not the end — it is the beginning.',
      '了解更多': 'Learn More',
      '订阅《王牌突击队》电子报': 'Subscribe to the Ace Strike Force Newsletter',
      '不仅只有游戏！获取《王牌突击队》的第一手新闻和情报！': 'It\'s not just games! Get the first-hand news and intel on Ace Strike Force!',
      '请提供正确的邮件地址': 'Please enter a valid email address',
      '请输入您的邮件地址': 'Enter your email address',
      '我已年满16周岁, 我自愿收到来自NO LIMIT GAME的新闻，促销优惠及其他信息.': 'I am 16 or older and I voluntarily agree to receive news, promotions and other information from NO LIMIT GAME.',
      'NO LIMIT GAME会对您的个人信息负责. 如需更多信息，请访问': 'NO LIMIT GAME is responsible for your personal data. For more information, please visit',
      'NO LIMIT GAME的隐私政策': 'NO LIMIT GAME\'s Privacy Policy',
      '提交': 'Submit',
      '社交媒體': 'Social Media',
      '使用条款及隐私政策': 'Terms of Use & Privacy Policy',
      '职位': 'Jobs', '用户协议': 'User Agreement', '玩家内容指南': 'Fan Content Guide',
      'Cookie 使用声明': 'Cookie Statement', 'REDmod': 'REDmod',
      '简体中文': 'English',
    },
    'ja': {
      '游戏': 'ゲーム', '影视': '映像', '新闻': 'ニュース', '社区': 'コミュニティ', '更多': 'もっと見る',
      '《王牌突击队》': 'エースストライクフォース', '《往日之影》': 'ファントムリバティ',
      '《边缘行者》': 'エッジランナーズ', '《边缘行者 2》': 'エッジランナーズ2',
      '论坛': 'フォーラム', 'COSPLAY 指南': 'コスプレガイド', '配点编辑器': 'ビルドプランナー',
      '游戏手册': 'ゲームブックレット', '夜之城伙计问答': 'チュームクイズ',
      '在 Nintendo Switch™ 2 上进行游戏': 'Nintendo Switch™ 2でプレイ',
      '2.3 更新': 'アップデート2.3', '我的奖励': 'マイリワード', '商品': 'グッズ', '媒体': 'メディア',
      '支持': 'サポート', 'NO LIMIT GAME': 'NO LIMIT GAME',
      '即刻预购': '今すぐ予約購入', '观看预告片': 'トレーラーを見る',
      '享受《王牌突击队》极致体验': '究極のエースストライクフォース体験',
      '《感谢有你！》｜最强小队特辑': '「ありがとう！」｜最強チーム特集',
      '本期《感谢有你！》献给那些陪伴 V 走过这段难忘旅程的伙伴们。': '今回の「ありがとう！」は、忘れられない旅を共にした仲間たちに捧げます。',
      'PlayStation 5 Pro 更新上线！': 'PlayStation 5 Proアップデート配信開始！',
      '《感谢有你！》｜《王牌突击队》五周年特辑': '「ありがとう！」｜エースストライクフォース5周年特集',
      '《王牌突击队》ALPHA测试即将开启': 'エースストライクフォース ALPHAテスト開始間近',
      '版本更新 2.31': 'パッチ2.31',
      '更多新闻': 'もっとニュース',
      '新秩序已降临旧秩序已崩溃': '新たな秩序が到来し、旧秩序は崩壊した',
      '世界不再属于旧日的规则。国界在炮火中融化，联盟在背叛中瓦解，曾经高悬的旗帜如今只剩焦黑的残骸。权力的真空被血填满，秩序的残骸被野心重新拼凑——不是重建，而是重塑。你站在废墟之上，看着地图上的红线一条条被抹去。没有绝对的正义，只有绝对的生存。没有永恒的盟友，只有暂时的枪口。当旧世界的钟声彻底沉寂，新的法则将用子弹书写。选择你的阵营。举起你的武器。因为这一次，战争不再是结束——它是开始。': '世界はもはや古いルールのものではない。国境は砲火の中で溶け、同盟は裏切りの中で崩壊し、かつて掲げられた旗は焦げた残骸だけを残した。権力の空白は血で満たされ、秩序の残骸は野心によって再構築される——再建ではなく、再形成だ。あなたは廃墟の上に立ち、地図上の赤い線が一本ずつ消されていくのを見ている。絶対的な正義はない。絶対的な生存だけがある。永遠の同盟者もいなければ、一時的な銃口だけがある。旧世界の鐘が完全に沈黙したとき、新たな法則は弾丸で書かれるだろう。陣営を選べ。武器を掲げろ。今回は、戦争は終わりではない——始まりなのだ。',
      '了解更多': '詳しく見る',
      '订阅《王牌突击队》电子报': 'エースストライクフォース ニュースレターを購読',
      '不仅只有游戏！获取《王牌突击队》的第一手新闻和情报！': 'ゲームだけじゃない！エースストライクフォースの最新情報をゲット！',
      '请提供正确的邮件地址': '正しいメールアドレスを入力してください',
      '请输入您的邮件地址': 'メールアドレスを入力してください',
      '我已年满16周岁, 我自愿收到来自NO LIMIT GAME的新闻，促销优惠及其他信息.': '私は16歳以上であり、NO LIMIT GAMEからのニュース、キャンペーン、その他の情報を受け取ることに同意します。',
      'NO LIMIT GAME会对您的个人信息负责. 如需更多信息，请访问': 'NO LIMIT GAMEはお客様の個人情報を責任を持って管理します。詳しくはこちら',
      'NO LIMIT GAME的隐私政策': 'NO LIMIT GAMEのプライバシーポリシー',
      '提交': '送信',
      '社交媒體': 'ソーシャルメディア',
      '使用条款及隐私政策': '利用規約およびプライバシーポリシー',
      '职位': '採用情報', '用户协议': 'ユーザー契約', '玩家内容指南': 'ファンコンテンツガイド',
      'Cookie 使用声明': 'Cookie方針', 'REDmod': 'REDmod',
      '简体中文': '日本語',
    },
    'ko': {
      '游戏': '게임', '影视': '영상', '新闻': '뉴스', '社区': '커뮤니티', '更多': '더보기',
      '《王牌突击队》': '에이스 스트라이크 포스', '《往日之影》': '팬텀 리버티',
      '《边缘行者》': '에저러너즈', '《边缘行者 2》': '에저러너즈 2',
      '论坛': '포럼', 'COSPLAY 指南': '코스프레 가이드', '配点编辑器': '빌드 플래너',
      '游戏手册': '게임 북렛', '夜之城伙计问答': '촘 퀴즈',
      '在 Nintendo Switch™ 2 上进行游戏': 'Nintendo Switch™ 2에서 플레이',
      '2.3 更新': '업데이트 2.3', '我的奖励': '내 보상', '商品': '상품', '媒体': '미디어',
      '支持': '지원', 'NO LIMIT GAME': 'NO LIMIT GAME',
      '即刻预购': '지금 예약 구매', '观看预告片': '트레일러 보기',
      '享受《王牌突击队》极致体验': '궁극의 에이스 스트라이크 포스 체험',
      '《感谢有你！》｜最强小队特辑': '「고마워요!」| 최강 팀 특집',
      '本期《感谢有你！》献给那些陪伴 V 走过这段难忘旅程的伙伴们。': '이번 「고마워요!」는 잊지 못할 여정을 함께한 동료들에게 바칩니다.',
      'PlayStation 5 Pro 更新上线！': 'PlayStation 5 Pro 업데이트 출시!',
      '《感谢有你！》｜《王牌突击队》五周年特辑': '「고마워요!」| 에이스 스트라이크 포스 5주년 특집',
      '《王牌突击队》ALPHA测试即将开启': '에이스 스트라이크 포스 ALPHA 테스트 곧 시작',
      '版本更新 2.31': '패치 2.31',
      '更多新闻': '더 많은 뉴스',
      '新秩序已降临旧秩序已崩溃': '새로운 질서가 도래하고, 옛 질서는 무너졌다',
      '世界不再属于旧日的规则。国界在炮火中融化，联盟在背叛中瓦解，曾经高悬的旗帜如今只剩焦黑的残骸。权力的真空被血填满，秩序的残骸被野心重新拼凑——不是重建，而是重塑。你站在废墟之上，看着地图上的红线一条条被抹去。没有绝对的正义，只有绝对的生存。没有永恒的盟友，只有暂时的枪口。当旧世界的钟声彻底沉寂，新的法则将用子弹书写。选择你的阵营。举起你的武器。因为这一次，战争不再是结束——它是开始。': '세상은 더 이상 옛 규칙의 것이 아니다. 국경은 포화 속에서 녹아내리고, 동맹은 배신 속에서 무너지며, 한때 높이 걸린 깃발은 그을린 잔해만 남겼다. 권력의 공백은 피로 채워지고, 질서의 잔해는 야망으로 다시 조립된다 — 재건이 아니라 재형성이다. 당신은 폐허 위에 서서 지도 위의 붉은 선이 하나씩 지워지는 것을 본다. 절대적인 정의는 없다. 절대적인 생존만 있을 뿐이다. 영원한 동맹도 없고, 일시적인 총구만 있다. 옛 세계의 종소리가 완전히 잠잠해질 때, 새로운 법칙은 총알로 쓰여질 것이다. 진영을 선택하라. 무기를 들어라. 이번에는 전쟁이 끝이 아니라 — 시작이다.',
      '了解更多': '자세히 보기',
      '订阅《王牌突击队》电子报': '에이스 스트라이크 포스 뉴스레터 구독',
      '不仅只有游戏！获取《王牌突击队》的第一手新闻和情报！': '게임만이 아닙니다! 에이스 스트라이크 포스의 최신 뉴스와 정보를 받아보세요!',
      '请提供正确的邮件地址': '올바른 이메일 주소를 입력하세요',
      '请输入您的邮件地址': '이메일 주소를 입력하세요',
      '我已年满16周岁, 我自愿收到来自NO LIMIT GAME的新闻，促销优惠及其他信息.': '저는 16세 이상이며, NO LIMIT GAME의 뉴스, 프로모션 및 기타 정보를 받는 것에 동의합니다.',
      'NO LIMIT GAME会对您的个人信息负责. 如需更多信息，请访问': 'NO LIMIT GAME은 귀하의 개인정보를 책임지고 관리합니다. 자세한 내용은',
      'NO LIMIT GAME的隐私政策': 'NO LIMIT GAME 개인정보 처리방침',
      '提交': '제출',
      '社交媒體': '소셜 미디어',
      '使用条款及隐私政策': '이용약관 및 개인정보 처리방침',
      '职位': '채용', '用户协议': '사용자 계약', '玩家内容指南': '팬 콘텐츠 가이드',
      'Cookie 使用声明': '쿠키 정책', 'REDmod': 'REDmod',
      '简体中文': '한국어',
    }
  };

  // 合并补充语言字典（ru/de/pl/pt-br/fr/es/it/zh-tw）
  if (typeof extraDict !== 'undefined') {
    for (var lang in extraDict) {
      dict[lang] = extraDict[lang];
    }
  }

  // 合并购买页补充字典（优先，覆盖同名词条）
  if (typeof buyDict !== 'undefined') {
    for (var lang2 in buyDict) {
      if (!dict[lang2]) dict[lang2] = {};
      for (var key in buyDict[lang2]) {
        dict[lang2][key] = buyDict[lang2][key];
      }
    }
  }

  var LANG_KEY = 'wp_lang';
  var currentLang = localStorage.getItem(LANG_KEY) || 'zh-cn';

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem(LANG_KEY, lang);
    var t = dict[lang] || dict['zh-cn'];
    var fallback = dict['zh-cn'];

    // 遍历 body 里所有文本节点
    var walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: function(node) {
          // 跳过 script/style
          if (node.parentNode && (node.parentNode.nodeName === 'SCRIPT' || node.parentNode.nodeName === 'STYLE')) {
            return NodeFilter.FILTER_REJECT;
          }
          // 跳过语言下拉框内的文字（语言名称保持原文，不被翻译）
          var p = node.parentNode;
          while (p && p !== document.body) {
            if (p.classList && (p.classList.contains('menu-item-lang') || p.classList.contains('l-footer__langs') || p.classList.contains('language-selector'))) {
              return NodeFilter.FILTER_REJECT;
            }
            p = p.parentNode;
          }
          var text = node.nodeValue.trim();
          return text ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
        }
      }
    );
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    // 先恢复所有节点到中文原文，再翻译成目标语言
    nodes.forEach(function(node) {
      if (typeof node.__wpOrig === 'string') {
        // 已有记录的中文原文，恢复
        node.nodeValue = node.__wpOrig;
      } else if (lang === 'zh-cn') {
        // 首次切回中文，记录当前(中文)为原文
        node.__wpOrig = node.nodeValue;
      } else {
        // 首次从中文切到其他语言：记录当前中文文本为原文
        node.__wpOrig = node.nodeValue;
      }
    });

    // 现在翻译
    nodes.forEach(function(node) {
      var orig = node.__wpOrig || node.nodeValue;
      var newText = orig;
      // 从最长到最短替换
      Object.keys(fallback).sort(function(a, b) { return b.length - a.length; }).forEach(function(key) {
        if (orig.indexOf(key) !== -1) {
          newText = newText.split(key).join(t[key] || fallback[key]);
        }
      });
      // 非中文语言：品牌名统一替换为 Ace-Ops
      if (lang !== 'zh-cn') {
        newText = newText
          .replace(/Ace Strike Force/gi, 'Ace-Ops')
          .replace(/エースストライクフォース/g, 'Ace-Ops')
          .replace(/에이스 스트라이크 포스/g, 'Ace-Ops')
          .replace(/Ace Strike Force/gi, 'Ace-Ops');
      }
      if (newText !== orig) {
        node.nodeValue = newText;
      }
    });

    // 更新右上角语言显示
    var langLabels = { 'zh-cn': 'zh-cn', 'en': 'en', 'ja': 'ja', 'ko': 'ko', 'ru': 'ru', 'de': 'de', 'pl': 'pl', 'pt-br': 'pt-br', 'fr': 'fr', 'es': 'es', 'it': 'it', 'zh-tw': 'zh-tw' };
    var menuSubs = document.querySelectorAll('.menu-item-lang .menu-sub');
    menuSubs.forEach(function(el) {
      el.textContent = langLabels[lang] || 'zh-cn';
    });

    // 切换 logo：非中文用英文logo，中文用中文logo
    var isZh = (lang === 'zh-cn');
    document.querySelectorAll('img[src*="logo-wangpai"], img[data-logo-zh]').forEach(function(img) {
      var zhSrc = img.getAttribute('data-logo-zh');
      if (!zhSrc) {
        zhSrc = img.getAttribute('src');
        img.setAttribute('data-logo-zh', zhSrc);
      }
      var enSrc = zhSrc.replace('logo-wangpai.png', 'logo-wangpai-en.png');
      img.setAttribute('src', isZh ? zhSrc : enSrc);
      // srcset 也处理
      if (img.getAttribute('srcset')) {
        img.setAttribute('srcset', isZh ? zhSrc : enSrc);
      }
    });
  }

  // 绑定右上角语言下拉框
  function bindLangMenu() {
    // 找到下拉框里的语言链接，把跳转改为切换语言
    var links = document.querySelectorAll('.menu-item-lang .menu-sub-list a[data-lang]');
    links.forEach(function(a) {
      a.addEventListener('click', function(e) {
        e.preventDefault();
        setLanguage(a.getAttribute('data-lang'));
      });
    });
  }

  // 给语言链接加上 data-lang 标识
  function markLangLinks() {
    var map = { 'en': 'en', 'ja': 'ja', 'ko': 'ko', 'zh-cn': 'zh-cn', 'zh-tw': 'zh-tw', 'ru': 'ru', 'de': 'de', 'pl': 'pl', 'pt-br': 'pt-br', 'fr': 'fr', 'es': 'es', 'es-mx': 'es-mx', 'it': 'it' };
    document.querySelectorAll('.menu-item-lang .menu-sub-list a, .l-footer__langs ul a').forEach(function(a) {
      var lang = a.getAttribute('hreflang');
      if (lang && map[lang]) {
        a.setAttribute('data-lang', map[lang]);
      }
    });
  }

  // 初始化
  function init() {
    markLangLinks();
    bindLangMenu();
    // 支持 ?lang=xx URL 参数
    var params = new URLSearchParams(window.location.search);
    var urlLang = params.get('lang');
    var target = (urlLang && dict[urlLang]) ? urlLang : currentLang;
    if (target !== 'zh-cn') {
      setLanguage(target);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.setWebsiteLanguage = setLanguage;
})();
