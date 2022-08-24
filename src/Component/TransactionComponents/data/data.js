import select from '../inputs/select'
import contentEditable from '../inputs/contentEditable';

export const getColumns = ({ criteria, supBox, jobAsForm, indecator }) => {
    const catname = supBox.map(x => ({ name: x.catname, id: x.CAT_ID }))
    const MAIN_BOX_NAME = supBox.map(x => ({ name: x.jdnamea_sup_box, id: x.MAIN_BOX_ID, catname: x.catname, SUP_BOX_NAME: x.emp_box_name})).filter(x => x.catname === criteria.catname || x.SUP_BOX_NAME === criteria.SUP_BOX_NAME)
    const SUP_BOX_NAME = supBox.map(x => ({ name: x.emp_box_name, id: x.emp_box_id, catname: x.catname ,MAIN_BOX_NAME: x.jdnamea_sup_box })).filter(x => x.catname === criteria.catname).filter(x => x.MAIN_BOX_NAME === criteria.MAIN_BOX_NAME)
    const gname = supBox.map(x => ({ name: x.gname, id: x.gid, criteria: x.gid }))
    const jobasform = jobAsForm.map(x => ({name: x.JOB_ASSIGNMENT_FORM_ARABIC, id: x.JOB_ASSIGNMENT_FORM, criteria: x.JOB_ASSIGNMENT_FORM }))
    const indecator_2 = indecator.map(x=> ({name: x.INDICATOR_NAME, id: x.INDICATOR, criteria: x.INDICATOR}))
    const cols = [
        {
            select: contentEditable, column_name: "تاريخ الحركة", curser: "TRANS_DATE", key: "1", index: "1",
            id: "TRANS_DATE", idKey: 'ROW_ID'
        },
        { updateOption: catname, select, column_name: "الإدارة", curser: "catname", key: "2", index: "2", id: "catname" },
        { updateOption: MAIN_BOX_NAME, select, column_name: "الوظيفة", curser: "MAIN_BOX_NAME", key: "3", index: "3", id: "MAIN_BOX_NAME" },
        { updateOption: SUP_BOX_NAME, select, column_name: "المسمى الوظيفي", curser: "SUP_BOX_NAME", key: "4", index: "4", id: "SUP_BOX_NAME" },
        { updateOption: gname, select, column_name: "نوع التخصص", curser: "G_NAME", key: "5", index: "5", id: "G_NAME" },
        { updateOption: jobasform, select, column_name: "طريقة شغل الوظيفة", curser: "jobassignmentar", key: "6", index: "6", id: "jobassignmentar" },
        { updateOption: indecator_2, select, column_name: "حالة الوظيفة", curser: "INDICATOR_NAME", key: "7", index: "7", id: "INDICATOR_NAME" },
        { col_edit: 'تعديل', id: "edit", index: '8', key: '8' },
        { col_delete: 'حذف', id: "delete", index: '9', key: '9' }
    ]
    return cols
}