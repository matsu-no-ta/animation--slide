const slide = () => {
    new Splide(".splide", {
        autoplay: true, // 自動再生（デフォルトはfalse）
        interval: 3000, // 自動再生の間隔（autoplay有効時のみ）
        speed: 2000, // スライドの移動時間
        rewind: true, // スライドがの最後まで行ったら先頭に戻る（デフォルトはfalse）
        type: "slide", // スライドのエフェクト：スライド 他に’loop’, ‘fade’
        perPage: 1, // 1ページに何枚スライドを表示するか
        gap:"16px", // スライド間余白
        // arrows: 矢印ボタンを表示するかの設定（デフォルトはtrue）
        // pagination: ページネーションを表示するかの設定(デフォルトはtrue)
        breakpoints: {
            568: {
                arrows: false,
            },
        }
    }).mount();
}

slide();