import BaseComponent from './BaseComponent';

export default class UiTableComponent extends BaseComponent {

    render() {

        return (
            <table class='table'>
                <thead>
                    <tr>
                        <th each='column of columns'>#[column.caption]</th>
                    </tr>
                </thead>
                <tbody>
                    <tr each='datum of data'>
                        <td each='column of columns'>#[cellValue]</td>
                    </tr>
                </tbody>
            </table>
        );

    }

    getCellValue() {

        const index = this.get('column.id');

        return this.get('datum')[index];

    }

    getColumns() {

        return this.get('meta');

    }

}