export default function (nga, admin) {
    var jgsb = admin.getEntity('jgsb');
    jgsb.label('农业信息网');
    jgsb.listView()
        .title('农业信息网')
        .fields([
            nga.field('id'),
            nga.field('name').label('产品名称'),
            nga.field('market').label('市场'),
            nga.field('avg_price').label('均价'),
            nga.field('prod_place').label('产地'),
            nga.field('time').label('时间')
        ])
        .filters([
            nga.field('name').label('产品名称'),
            nga.field('market').label('市场'),
        ])
        .sortField('id')
        .sortDir('ASC');

    return jgsb;
}
