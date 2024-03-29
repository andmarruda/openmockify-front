import React from 'react';
import { MockiProps } from '../../types/MockiProps';
import { useTranslation } from "react-i18next";
import { BreadcrumbList } from '../../types/BreadcrumbList';
import Breadcrumb from '../../components/Breadcrumb';
import Input from '../../components/Input';
import useInput from '../../hooks/useInput';
import Select from '../../components/Select';
import DataPattern from '../../configs/DataPattern.json';
import useSelect from '../../hooks/useSelect';
import { timeIntervalOptions } from '../../configs/Utils';
import { OptionsType } from '../../types/OptionsType';
import { useParams } from 'react-router-dom';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';

const EditMocki = ({ subdomainId }: MockiProps) => {
    const { t } = useTranslation();
    const { mockiId } = useParams();
    const { quill, quillRef } = useQuill();
    const manageUrl = `/subdomain/manage/${subdomainId}`;
    const inputName = useInput('');
    const inputUrl = useInput('');
    const inputMethod = useSelect(true);
    const inputInterval = useInput('');
    const inputIntervalType = useSelect(true);
    const inputResponseType = useSelect(true);
    const [inputQuill, setInputQuill] = React.useState('');

    React.useEffect(() => {
        if(quill){
            quill.on('text-change', () => {
                setInputQuill(quill.root.innerHTML);
            });
        }
    }, [quill]);

    const breadcrumbList : BreadcrumbList = [
        {
            name: t('subdomain'),
            url: "/subdomain",
            active: false
        },
        {
            name: t('manage'),
            url: manageUrl,
            active: false
        },
        {
            name: t('edit'),
            url: `${manageUrl}/edit/${mockiId}`,
            active: true
        }
    ];
    
    return (
        <>
            <Breadcrumb list={breadcrumbList} />
            <form>
                <Input type="text" name="name" id="name" className="form-control" label="name" {...inputName} />
                <div className="row">
                    <div className="col-6">
                        <Select name="method" id="method" className="form-select" label="method" options={DataPattern.method} {...inputMethod} />
                    </div>
                    <div className="col-6">
                        <Input type="text" name="url" id="url" className="form-control" label="url" {...inputUrl} />
                    </div>
                </div>
                <Select name="response_type" id="response_type" className="form-select" label="response_type" options={DataPattern.responseType} {...inputResponseType} />
                <div className="row">
                    <div className="col-6">
                        <Input type="number" name="interval" id="interval" className="form-control" label="waiting_time" {...inputInterval} />
                    </div>
                    <div className="col-6">
                        <Select name="interval_type" id="interval_type" className="form-select" label="interval_type" options={timeIntervalOptions() as OptionsType} {...inputIntervalType} />
                    </div>
                </div>
                <div className='col-12' style={{ height: '500px'}}>
                    <div ref={quillRef} />
                </div>
            </form>
        </>
    );
}

export default EditMocki;