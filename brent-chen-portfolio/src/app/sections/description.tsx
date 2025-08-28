import React from "react";

function Description() {
  return (
    <div
      className="relative max-w-4xl mx-auto bg-white/90 backdrop-blur-md p-8 mb-8 border border-white/60 shadow-md"
      style={{ borderRadius: 0 }}
    >
      <div className="space-y-6">
        <p className="text-gray-800 text-base leading-relaxed">
          UC Davis でMasters in
          Managementを専攻し、卒業。現在PROJXONにてフルスタックインターンとして「The
          Phelan Focus」ウェブサイト開発に貢献。We Care
          Insuranceでの6ヶ月間のソフトウェア開発インターン経験と、UCSC
          Blueprintでの1年間のプロジェクトリーダー経験を持つ。フロントエンドとバックエンドの開発、そしてプロジェクト管理に携わってきました。
        </p>
        <p className="text-gray-800 text-base leading-relaxed">
          日本の文化と人々の相互尊重に深く魅力を感じ、ソフトウェア開発への情熱を活かして日本の産業界の課題解決に貢献したいと考えています。技術への挑戦と異文化での成長を通じて、より良いソリューションの創造を目指しています。
        </p>
      </div>
    </div>
  );
}

export default Description;
