import React from 'react'
import Button from '../components/Button';

type Props = {}

const ButtonPage = (props: Props) => {
  return (
    <div className='p-5 pl-20 space-y-8'>
        <h1 className="text-4xl  font-bold font-Poppins  text-[#4f4f4f]">Buttons</h1>
        <div className='w-[70%] flex space-x-32 items-center'>
            <div className='space-y-2'>
                <p className='font-UbuntuMono'>
                    &lt;Button /&gt;
                </p>
                <Button className='font-NotoSans font-medium' />
            </div>

            <div className='space-y-2'>
            <p className='font-UbuntuMono'>
                &lt;Button variant='outline' /&gt;
                </p>
                <Button className='font-NotoSans font-medium' variant='outline' />
            </div>
            <div className='space-y-2'>
            <p className='font-UbuntuMono'>
                &lt;Button variant='text' /&gt;
                </p>
                <Button className='font-NotoSans font-medium' variant='text' />
            </div>
        </div>

        <div className='w-[70%] flex space-x-32 items-center'>
        

            <div className='space-y-2'>
                <p className='font-UbuntuMono'>
                &lt;Button disabled /&gt;
                </p>
                <Button className='font-NotoSans font-medium' disabled />
            </div>
            <div className='space-y-2'>
            <p className='font-UbuntuMono'>
                &lt;Button variant='text' disabled /&gt;
                </p>
                <Button className='font-NotoSans font-medium' variant='text' disabled />
            </div>
        </div>

        <div className='w-[70%] flex space-x-32 items-center'>
           

            <div className='space-y-2'>
            <p className='font-UbuntuMono'>
                &lt;Button startIcon="store"  /&gt;
                </p>
                <Button className='font-NotoSans font-medium' colors='primary' startIcon="store" />
            </div>
            <div className='space-y-2'>
                <p className='font-UbuntuMono'>
                    &lt;Button endIcon='store' /&gt;
                </p>
                <Button className='font-NotoSans font-medium' colors='primary' endIcon='store'/>
            </div>
        </div>

        <div className='w-[70%] flex space-x-32 items-center'>
            <div className='space-y-2'>
            <p className='font-UbuntuMono'>
                &lt;Button size='sm' /&gt;
                </p>
                <Button className='font-NotoSans font-medium' colors='primary' size='sm' />
            </div>

            <div className='space-y-2'>
            <p className='font-UbuntuMono'>
                &lt;Button size='md' /&gt;
                </p>
                <Button className='font-NotoSans font-medium' colors='primary' size='md' />
            </div>
            <div className='space-y-2'>
            <p className='font-UbuntuMono'>
                &lt;Button size='lg' /&gt;
                </p>
                <Button className='font-NotoSans font-medium' colors='primary' size='lg' />
            </div>


        </div>

        <div className='w-full flex space-x-32 items-center'>
            <div className='space-y-2'>
            <p className='font-UbuntuMono'>
                &lt;Button color='default' /&gt;
                </p>
                <Button className='font-NotoSans font-medium' colors='default'  />
            </div>

            <div className='space-y-2'>
            <p className='font-UbuntuMono'>
                &lt;Button colors='primary' /&gt;
                </p>
                <Button className='font-NotoSans font-medium' colors='primary' />
            </div>
            <div className='space-y-2'>
            <p className='font-UbuntuMono'>
                &lt;Button colors='secondary' /&gt;
                </p>
                <Button className='font-NotoSans font-medium' colors='secondary'/>
            </div>
            <div className='space-y-2'>
            <p className='font-UbuntuMono'>
                &lt;Button colors='danger' /&gt;
                </p>
                <Button className='font-NotoSans font-medium' colors='danger'/>
            </div>

        </div>
    </div>
  )
}

export default ButtonPage;