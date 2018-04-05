var selectedItems = activeDocument.selection;

function main() {
    var before = prompt("検索文字列を入力してください: ", "");
    if (before === undefined || before === null || before === "") {
        alert("キャンセルしました");
        return;
    }

    var after = prompt("置換文字列を入力してください: ", "");
    if (after === undefined || after === null || after === "") {
        alert("キャンセルしました");
        return;
    }

    if (!confirm("" + selectedItems.length + "個のオブジェクト名を、以下の通り置換します。よろしいですか？\n\n[" + before + "] → [" + after + "]")) {
        alert("キャンセルしました");
        return;
    }

    replaceObjectNames(selectedItems, before, after);
    alert("オブジェクト名の置換に成功しました。");
}

function replaceObjectNames(items, before, after) {
    for (var i = 0, len = items.length; i < len; i++) {
        var item = items[i];
        item.name = item.name.split(before).join(after);
    }
}

main();