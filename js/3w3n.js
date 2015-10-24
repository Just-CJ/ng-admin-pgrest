export default function (nga, admin) {
    var _3w3n = admin.getEntity('_3w3n');
    _3w3n.label('农产品价格信息网');
    _3w3n.listView()
        .title('农产品价格信息网')
        .fields([
            nga.field('id'),
            nga.field('name').label('产品名称'),
            nga.field('price').label('价格'),
            nga.field('unit').label('单位'),
            nga.field('tradeplace').label('产地'),
            nga.field('trend').label('来源'),
            nga.field('time').label('时间')
        ])
        .filters([
            nga.field('name').label('产品名称'),
            nga.field('tradeplace').label('产地'),
        ])
        .sortField('id')
        .sortDir('ASC');

    return _3w3n;
}
