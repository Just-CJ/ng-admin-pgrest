export default function (nga, admin) {
    var ymt = admin.getEntity('ymt');
    ymt.label('一亩田');
    ymt.listView()
        .title('一亩田')
        .fields([
            nga.field('id'),
            nga.field('name').label('产品名称'),
            nga.field('category').label('类别'),
            nga.field('province').label('省市'),
            nga.field('price').label('价格'),
            nga.field('time').label('时间')
        ])
        .filters([
            nga.field('name').label('产品名称'),
            nga.field('category').label('类别'),
            nga.field('province').label('省市')
        ])
        .sortField('id')
        .sortDir('ASC');

    return ymt;
}
