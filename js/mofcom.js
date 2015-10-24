export default function (nga, admin) {
    var mofcom = admin.getEntity('mofcom');
    mofcom.label('新农村商网');
    mofcom.listView()
        .title('新农村商网')
        .fields([
            nga.field('id'),
            nga.field('name').label('产品名称'),
            nga.field('category').label('类别'),
            nga.field('price').label('价格'),
            nga.field('province').label('省市'),
            nga.field('market').label('市场'),
            nga.field('time').label('时间')
        ])
        .filters([
            nga.field('name').label('产品名称'),
            nga.field('category').label('类别'),
            nga.field('province').label('省市'),
            nga.field('market').label('市场'),
        ])
        .sortField('id')
        .sortDir('ASC');

    return mofcom;
}
