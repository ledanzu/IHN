/*
 * $Id: BootstrapUtils.java, 2015-7-21 ����10:04:27 sufeng Exp $
 * 
 *  
 * All rights reserved.
 * 
 * This software is copyrighted and owned by SF or the copyright holder
 * specified, unless otherwise noted, and may not be reproduced or distributed
 * in whole or in part in any form or medium without express written permission.
 */
package com.sf.core.bootstrap.impl;

import com.sf.base.log.def.Logger;
import com.sf.base.log.def.SimpleLogger;

/**
 * <p>
 * Title: BootstrapUtils
 * </p>
 * <p>
 * Description: bootstrap����ģ��Ĺ�����
 * </p>
 * 
 * @author sufeng
 */
public class BootstrapUtils {

    /**
     * ��־
     */
    private static Logger logger;
    
    /**
     * ȱʡlogger
     */
    private static Logger simpleLogger=new SimpleLogger("simple");
    
    /**
     * ��ȡlogger
     * @return
     */
    public synchronized static Logger getLogger(){
        return logger==null ? simpleLogger : logger;
    }
    
    /**
     * ����bootstrapʹ�õ�logger
     * @param logger
     */
    public static void setLogger(Logger logger){
        BootstrapUtils.logger=logger;
    }
    
}